import {Swiper} from '../vendor/swiper.js';

function initJuriSwiper() {
  const juriSwiper = new Swiper(".juri__swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".juri__swiper-button-next",
      prevEl: ".juri__swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return juriSwiper;
}

export { initJuriSwiper }
