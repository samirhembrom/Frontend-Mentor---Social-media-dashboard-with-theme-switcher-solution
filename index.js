const checkboxEl = document.querySelector(".checkbox");
const headerEl = document.querySelector(".header");
const headingEL = document.querySelector(".heading");
const subHeadingEl = document.querySelector(".sub-heading");
const header2El = document.querySelector(".heading-2");
const textEl = document.querySelector(".text");
const sliderEl = document.querySelector(".slider");
const cardEl = document.querySelectorAll(".card");
const cardRectacleEl = document.querySelectorAll(".card-rectangle");
const bgColorEl = document.querySelector(".bg-color");
const textCountEl = document.querySelectorAll(".text-count");
const viewCountEl = document.querySelectorAll(".view-count");

checkboxEl.checked = false;

checkboxEl.addEventListener("change", () => {
  headerEl.classList.toggle("light-header");
  headingEL.classList.toggle("light-heading");
  subHeadingEl.classList.toggle("light-sub-heading");
  textEl.classList.toggle("text-grey");
  sliderEl.classList.toggle("slider-background");
  sliderEl.classList.toggle("white");
  for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].classList.toggle("card-light");
  }
  for (let i = 0; i < cardRectacleEl.length; i++) {
    cardRectacleEl[i].classList.toggle("card-light");
  }
  bgColorEl.classList.toggle("body-bacground");
  for (let i = 0; i < textCountEl.length; i++) {
    textCountEl[i].classList.toggle("light-heading");
  }
  for (let i = 0; i < viewCountEl.length; i++) {
    viewCountEl[i].classList.toggle("light-heading");
  }
  header2El.classList.toggle("light-heading");
});
