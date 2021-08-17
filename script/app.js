const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("open");
  menu.classList.toggle("active");
  overlay.classList.toggle("overlay");
});
