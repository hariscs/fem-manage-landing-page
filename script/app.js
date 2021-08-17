const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("overlay");
  //prevent body scroll Y when menu is open
  document.body.classList.toggle("prevent-scroll");
});
