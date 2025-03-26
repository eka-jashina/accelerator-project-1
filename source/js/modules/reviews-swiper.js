import {Swiper} from '../vendor/swiper.js';

function initReviewsSwiper() {
  const reviewsSwiper = new Swiper(".reviews__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".reviews__swiper-button-next",
      prevEl: ".reviews__swiper-button-prev",
    },
  });

  return reviewsSwiper;
}

export { initReviewsSwiper }
