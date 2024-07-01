"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar when any navbar link will be clicked
 */

const navbarLinks = document.querySelectorAll("[data-navlink]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * add active class on header and back-to-top btn
 * when window will scroll 100px from top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const subscription = document.querySelector("[data-subscription-panel]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    // header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    // header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//

// Define the media query
const mediaQuery = window.matchMedia("(max-width: 1200px)");

// Function to handle the media query change
function handleMediaQueryChange(event) {
  const element = document.getElementById("removeElementOnLoad");
  if (event.matches) {
    // If the media query matches (screen width is less than 600px), remove the element
    if (element) {
      element.remove();
    }
  } else {
    // If the media query does not match, ensure the element is present
    if (!element) {
      const newElement = document.createElement("div");
      newElement.id = "removeElementOnLoad";
      newElement.textContent = "This element will be removed on small screens.";
      document.body.appendChild(newElement);
    }
  }
}

// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes to the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);
