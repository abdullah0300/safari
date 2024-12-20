let lastScrollY = window.scrollY;
const announcementBar = document.querySelector('.announcement-bar');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // User is scrolling down
        announcementBar.classList.add('hidden');
        nav.style.top = '0'; // Move navbar to the top
    } else {
        // User is scrolling up
        announcementBar.classList.remove('hidden');
        nav.style.top = '40px'; // Move navbar below the announcement bar
    }
    lastScrollY = window.scrollY;
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;';

        // Prevent body scrolling when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcomePopup').classList.add('active');
    }, 1000);
};

function closePopup() {
    document.getElementById('welcomePopup').classList.remove('active');
}