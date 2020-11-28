// ADD DATE FUNCTION
let now = new Date();
let date = document.querySelector("#date");
date.innerText = dateBuilder(now);

function dateBuilder(d) {
  let months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونية",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  let days = [
    "السبت",
    "الأحد",
    "الأتنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// FIRST SWIPER
const swiper = new Swiper(".swiper-container", {
  autoplay: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SECOND SWIPER
const mainSwiper = new Swiper(".swiper-container-main", {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 800,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// CLOSE AND OPEN ADVERTISEMENT DIV
const closeIcons = document.querySelectorAll(".advertisement-img i");
console.log(closeIcons);
closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    document.querySelectorAll(".advertisement-img").forEach((img) => {
      img.style.display = "none";
      document.querySelectorAll(".advertisement-text").forEach((text) => {
        text.style.display = "block";
      });
    });
  });
});

const advertisementTexts = document.querySelectorAll(".advertisement-text p");
advertisementTexts.forEach((text) => {
  text.addEventListener("click", () => {
    document.querySelectorAll(".advertisement-text").forEach((text) => {
      text.style.display = "none";
    });
    document.querySelectorAll(".advertisement-img").forEach((img) => {
      img.style.display = "block";
    });
  });
});
