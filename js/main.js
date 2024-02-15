// Drak mood option
const ball = document.querySelector(".toggle-ball");
const item = document.querySelectorAll(
  ".navbar-container,.navbar .links a,.navbar .profile,.navbar .toggle,.navbar .toggle .toggle-ball,.sidebar,.sidebar i,.container,.container h1,.toggle-ball"
);

ball.addEventListener("click", () => {
  item.forEach((item) => {
    item.classList.toggle("active");
  });
});

// swiper

var swiper = new Swiper(".movie-content", {
  spaceBetween: 20,
  sliderPerGroup: 4,
  // loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
    },
    830: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
    1850: {
      slidesPerView: 6,
    },
  },
});
