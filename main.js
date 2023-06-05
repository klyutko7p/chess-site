const swiperElCoach = document.querySelector(".swiperCoach");
Object.assign(swiperElCoach, {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

swiperElCoach.initialize();

const swiperElItems = document.querySelector(".swiperItems");
Object.assign(swiperElItems, {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: true,
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

swiperElItems.initialize();
