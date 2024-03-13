function rotateImage(img) {
  document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.image'); // すべての画像を取得する
    var container = document.getElementById('container');
    var handle = document.getElementById('handle');
  
    var isDragging = false;
  
    images.forEach(function(image) {
      image.addEventListener('mousedown', startDrag);
      image.addEventListener('touchstart', startDrag);
    });
  
    function startDrag(e) {
        isDragging = true;
        e.preventDefault();
        if (e.type === 'mousedown') {
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
        } else if (e.type === 'touchstart') {
            document.addEventListener('touchmove', handleDrag);
            document.addEventListener('touchend', stopDrag);
        }
    }
  
    function handleDrag(e) {
        if (!isDragging) return;
  
        var touch = e.type === 'touchmove' ? e.touches[0] : e;
        var rect = container.getBoundingClientRect();
        var containerCenterX = rect.left + rect.width / 2;
        var containerCenterY = rect.top + rect.height / 2;
  
        var angle = Math.atan2(touch.clientY - containerCenterY, touch.clientX - containerCenterX) * (180 / Math.PI);
        
        // 回転させる画像を選択する
        var selectedImage = document.querySelector('.selected');
        selectedImage.style.transform = 'rotate(' + angle + 'deg)';
        handle.style.left = touch.clientX + 'px';
        handle.style.top = touch.clientY + 'px';
    }
  
    function stopDrag(e) {
        isDragging = false;
        handle.style.left = '50%';
        handle.style.top = '120%';
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', stopDrag);
    }
  });
  
  console.log('Rotating image:', img.alt);
  // 以下に回転処理を実装する
}