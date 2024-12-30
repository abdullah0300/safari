// Global variables
let lastScrollY = window.scrollY;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const announcementBar = document.querySelector('.announcement-bar');
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown-trigger');

    // Scroll handler for announcement bar and navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            announcementBar?.classList.add('hidden');
            nav.style.top = '0';
        } else {
            // Scrolling up
            announcementBar?.classList.remove('hidden');
            nav.style.top = '40px';
        }
        lastScrollY = window.scrollY;
    });

    // Toggle menu function
    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;';
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Hamburger click handler
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Handle mobile dropdown toggles
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Handle highlights for mobile
    if (window.innerWidth <= 768) {
        const container = document.querySelector('.highlights-container');
        const dots = document.querySelectorAll('.dot');

        if (container && dots.length > 0) {
            container.addEventListener('scroll', () => {
                const scrollPosition = container.scrollLeft;
                const itemWidth = container.querySelector('.highlight-item')?.offsetWidth || 0;
                const activeIndex = Math.round(scrollPosition / itemWidth);

                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === activeIndex);
                });
            });
        }
    }
});