import {Swiper} from '../vendor/swiper.js';

function fixTabIndex() {
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.setAttribute("tabindex", "-1"); // Отключаем фокус для всех
  });

  const activeSlides = document.querySelectorAll(".swiper-slide-active, .swiper-slide-next, .swiper-slide-prev");
  activeSlides.forEach((slide) => {
    slide.setAttribute("tabindex", "0"); // Разрешаем фокус только на видимых
  });
}

// Вызываем сразу, чтобы на первом слайде Tab работал нормально
fixTabIndex();

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

    on: {
      slideChangeTransitionEnd: function () {
        fixTabIndex();
      },
    },
  });

  return juriSwiper;
}

export { initJuriSwiper }
