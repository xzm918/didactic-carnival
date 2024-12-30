document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.c2');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            this.classList.toggle('zoomed');
            if (this.classList.contains('zoomed')) {
                this.style.transform = 'scale(2)';
                this.style.transition = 'transform 0.25s ease';
            } else {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 0.25s ease';
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.classList.contains('c2')) {
            images.forEach(function(image) {
                if (image.classList.contains('zoomed')) {
                    image.classList.remove('zoomed');
                    image.style.transform = 'scale(1)';
                }
            });
        }
    });
});