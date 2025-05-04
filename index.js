const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'show' class on the nav list
    navList.classList.toggle('show');
});

// scrollbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const productivitySwiper = new Swiper('.productivity-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.productivity-swiper .swiper-button-next',
      prevEl: '.productivity-swiper .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });