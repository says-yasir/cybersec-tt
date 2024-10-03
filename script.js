document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            closeAllDropdowns();  // Close all dropdowns before opening a new one
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', () => {

            dropdown.classList.remove('active');
        });
    });

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const centerContent = document.querySelector('.center-content');
    const stickyHeader = document.querySelector('.sticky-header');
    const logo = document.querySelector('.logo');
    const name = document.querySelector('.name');
    const subtext = document.querySelector('.subtext');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            stickyHeader.classList.add('header-visible');
            centerContent.style.opacity = '0';  // Fade out the center content on scroll
        } else {
            stickyHeader.classList.remove('header-visible');
            centerContent.style.opacity = '1';  // Fade back in
        }
    });
});
document.addEventListener('contextmenu', (e) => e.preventDefault()); 
document.addEventListener('copy', (e) => e.preventDefault()); 
document.addEventListener('paste', (e) => e.preventDefault()); 
document.addEventListener('selectstart', (e) => e.preventDefault()); 
