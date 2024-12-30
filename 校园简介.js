document.querySelectorAll('.c3').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#FFD700'; 
    });
    item.addEventListener('mouseout', function() {
        this.style.color = 'aliceblue';
    });
});

document.querySelector('.c2').addEventListener('click', function() {
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

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});