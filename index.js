const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'show' class on the nav list
    navList.classList.toggle('show');
});