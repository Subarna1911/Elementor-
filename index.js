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


  const counters = document.querySelectorAll('.count-digit');

  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const increment = target / 100;
  
    const step = () => {
      if (current < target) {
        current += increment;
        if (current >= target) current = target;
  
        const isFloat = !Number.isInteger(target);
        const displayValue = isFloat ? current.toFixed(1) : Math.floor(current);
  
        counter.innerText = `${displayValue}${suffix}`;
        requestAnimationFrame(step);
      }
    };
  
    step();
  });
  