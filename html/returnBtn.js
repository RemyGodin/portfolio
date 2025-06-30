document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) { // Affiche le bouton après 100px de défilement
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        header.scrollIntoView({
            behavior: 'smooth'
        });
    });
});