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



//     document.addEventListener('click', function (e) {
//         if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
//             toggleMenu();
//         }
//     });

//     window.addEventListener('resize', function () {
//         if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
//             toggleMenu();
//         }
//     });
// });

// window.onload = function() {
//     setTimeout(function() {
//         document.getElementById('welcomePopup').classList.add('active');
//     }, 1000);
// };

// function closePopup() {
//     document.getElementById('welcomePopup').classList.remove('active');
// }

// Add this JavaScript for mobile menu functionality


// highlights
if (window.innerWidth <= 768) {
    const container = document.querySelector('.highlights-container');
    const dots = document.querySelectorAll('.dot');
    
    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollLeft;
        const itemWidth = container.querySelector('.highlight-item').offsetWidth;
        const activeIndex = Math.round(scrollPosition / itemWidth);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
}


document.querySelector('.kili-gallery').addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        event.preventDefault();
        event.currentTarget.scrollLeft += event.deltaY;
    }
});


// Add this JavaScript for mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown-trigger');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
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
});