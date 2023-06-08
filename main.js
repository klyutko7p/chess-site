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
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3,
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

let burgerMenu = document.querySelector(".burger-menu");
let exitButton = document.querySelector(".exit-menu");
let navbarMenu = document.querySelector(".navbar-menu");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("hidden");
  navbarMenu.classList.add(
    "fixed",
    "bg-black",
    "navbar-menu",
    "z-20",
    "w-screen",
    "h-screen",
    "flex",
    "text-white",
    "items-center",
    "justify-center",
    "text-center",
    "duration-200"
  );
});

exitButton.addEventListener("click", () => {
  navbarMenu.cl;
  navbarMenu.className = "hidden";
});

AOS.init();
