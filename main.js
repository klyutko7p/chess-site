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
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-modal");

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

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
  navbarMenu.className = "hidden";
});

let items = document.querySelectorAll(".navbar-items");

items.forEach((item) => {
  item.addEventListener("click", () => {
    navbarMenu.className = "hidden";
  });
});

async function sendForm(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  let url =
    "https://script.google.com/macros/s/AKfycbwVPTFeNqGHib0IM1dLqIbMfiTsrILTqm2DmhJQJ65BxVAzXmgDk9d6DDikT0XWOpGuew/exec";
  url += "?name=" + encodeURIComponent(name);
  url += "&phone=" + encodeURIComponent(phone);

  let response = await fetch(url);
  if (response.ok) {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    modal.classList.remove("hidden");
    modal.classList.add("modal-style");
  } else {
    alert("Произошла ошибка при отправке заявки.");
  }
}

let form = document.querySelector("#application-form");
form.addEventListener("submit", sendForm);
