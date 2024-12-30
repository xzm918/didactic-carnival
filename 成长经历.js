window.addEventListener('load', function() {
    const images = document.querySelectorAll('.c2');
    images.forEach(image => {
        image.style.opacity = 0;
        image.style.transition = 'opacity 1s ease-in';
        setTimeout(() => {
            image.style.opacity = 1;
        }, 100); 
    });
});

document.querySelectorAll('.c2').forEach(image => {
    image.addEventListener('click', function() {
        const img = this.querySelector('img');
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        const modalImg = new Image();
        modalImg.src = img.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modal.appendChild(modalImg);
        const closeButton = document.createElement('button');
        closeButton.textContent = '关闭';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.zIndex = '1001';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        modal.appendChild(closeButton);
        document.body.appendChild(modal);
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.d1');
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        } else {
            section.style.backgroundColor = 'transparent';
        }
    });
});