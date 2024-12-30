window.addEventListener('load', function() {
  
    const images = document.querySelectorAll('.c4');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const textElements = document.querySelectorAll('h1, .c2');
            textElements.forEach(function(element) {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                element.style.color = randomColor;
            });
        });
    });
});