import './style.css'

document.querySelector('#year').textContent = new Date().getFullYear();

// Navbar Scroll Effect
const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax background for Hero
const heroBg = document.querySelector('.hero-img-bg');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if(heroBg) heroBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
});

// Initialize Swiper Carousel (Visual Tour)
setTimeout(() => {
    const swiper = new Swiper('.main-swiper-gallery', {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}, 500);
