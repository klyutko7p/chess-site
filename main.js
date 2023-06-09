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
  navbarMenu.className = "hidden";
});

let items = document.querySelectorAll(".navbar-items");

items.forEach((item) => {
  item.addEventListener("click", () => {
    navbarMenu.className = "hidden";
  });
});

AOS.init();

// Ваш идентификатор таблицы Google Sheets
async function sendForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  var url =
    "https://script.google.com/macros/s/AKfycbxpDLVUUx1gURVWVbTrvq1qEu1ts511XYLXxLPGE_LcXwEX7fxGTxeg4FObgYrUQkM3Gg/exec";
  url += "?name=" + encodeURIComponent(name);
  url += "&phone=" + encodeURIComponent(phone);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Заявка успешно отправлена.");
      // Дополнительные действия после успешной отправки заявки
    }
  };

  await xhr.send();

  window.location.href = await url;
}

let form = document.querySelector("#application-form");
form.addEventListener("submit", sendForm);
