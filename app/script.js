const hamburgerButton = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

hamburgerButton.addEventListener("click", function () {
  console.log("click button");

  if (header.classList.contains("open")) {
    body.classList.remove("no_scroll");
    header.classList.remove("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("no_scroll");
    header.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
