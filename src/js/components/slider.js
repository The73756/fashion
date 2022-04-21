import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.portfolio__slider', {
  slidesPerView: 1,
  spaceBetween: 21,

  breakpoints: {
    1200: {
      slidesPerView: 6,
    },

    1024: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 3,
    },

    476: {
      slidesPerView: 2,
    }
  }
});
