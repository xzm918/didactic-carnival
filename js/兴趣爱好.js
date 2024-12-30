
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.d1');
    
    cards.forEach(card => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    card.style.animation = 'cardEnter 1s ease forwards';
                }
            });
        });
        
        observer.observe(card, { childList: true });
    });
});