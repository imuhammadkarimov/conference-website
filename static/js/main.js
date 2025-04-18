// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Enable Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Enable Bootstrap popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Add active class to current nav item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // If the link href is in the current path, add active class
        if (currentLocation.includes(href) && href !== '/') {
            link.classList.add('active');
        } else if (href === '/' && currentLocation === '/') {
            link.classList.add('active');
        }
    });

    // Fade out alert messages after 5 seconds
    const alerts = document.querySelectorAll('.alert:not(.alert-permanent)');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = 'opacity 1s';
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.remove();
            }, 1000);
        }, 5000);
    });

    // Mobile menu functionality
    const menuList = document.querySelector('.menu-sec');
    const menuIcon = document.querySelector('.menu');

    if (menuIcon) {
        menuIcon.addEventListener('click', (e) => {
            if (e.target.classList.contains('menu')) {
                menuList.style.display = 'flex';
                menuIcon.style.display = 'none';
            }
        });
    }

    if (menuList) {
        menuList.addEventListener('click', (e) => {
            const clicked = e.target.classList.contains('links');
            if (clicked) {
                menuList.style.display = 'none';
                menuIcon.style.display = 'flex';
            }
        });
    }

    // Load more functionality for speakers/guests section if it exists
    const loadMoreBtn = document.querySelector('#load-more');
    if (loadMoreBtn) {
        let currentItem = 2;
        
        loadMoreBtn.onclick = () => {
            const boxes = [...document.querySelectorAll('.sec3 .speakers .guest')];
            for (let i = currentItem; i < currentItem + 2; i += 1) {
                if (boxes[i]) {
                    boxes[i].style.display = 'inline-block';
                }
            }
            currentItem += 2;

            if (currentItem >= boxes.length) {
                loadMoreBtn.style.display = 'none';
            }
        };
    }
});