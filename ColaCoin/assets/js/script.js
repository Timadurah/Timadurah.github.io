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
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
  if (!localStorage.getItem("overlayShowndd")) {
    if (window.scrollY >= 800) {
      subscription.classList.add("active");
      localStorage.setItem("overlayShowndd", "true");
    }
    if (window.scrollY <= 800) {
      subscription.classList.remove("active");
      subscription.computedStyleMap.visibilty = "hidden";
    }
  }
});

//

const calculatorBtn = document.querySelectorAll("[data-calculatorBtn]");
const btcRate = 1240;
const bnbRate = 530;
const ethRate = 470;

calculatorBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const coin = this.getAttribute("data-val").toLowerCase();
    document.querySelector("#CalculatortitleCoin").textContent =
      coin.toUpperCase();
    document.querySelector("#coinInput1").placeholder = coin.toUpperCase();
    document.querySelector(
      "[data-calculatorImgDiv]"
    ).src = `./assets/images/${coin}.svg`;

    let exchangeRate;
    switch (coin) {
      case "btc":
        exchangeRate = btcRate;
        break;
      case "ethereum":
        exchangeRate = ethRate;
        break;
      case "bnb":
        exchangeRate = bnbRate;
        break;
      default:
        exchangeRate = null;
        break;
    }

    if (exchangeRate !== null) {
      localStorage.setItem("exchangerate", exchangeRate);
    }
  });
});

class CoinExchangeCalculator {
  constructor() {
    this.coinInput1 = document.getElementById("coinInput1");
    this.coinInput2 = document.getElementById("coinInput2");
    this.exchangeRate = parseFloat(localStorage.getItem("exchangerate")); // Example exchange rate: 1 unit of coinInput1 = 30000 units of coinInput2

    this.init();
  }

  init() {
    // Listen for input events on coinInput1 and coinInput2
    this.coinInput1.addEventListener("input", () => this.updateCoinInput2());
    this.coinInput2.addEventListener("input", () => this.updateCoinInput1());
  }

  updateCoinInput2() {
    const coinValue1 = parseFloat(this.coinInput1.value);
    if (!isNaN(coinValue1)) {
      const coinValue2 = coinValue1 * this.exchangeRate;
      this.coinInput2.value = coinValue2.toFixed(2); // Adjust decimal places as needed
    } else {
      this.coinInput2.value = "";
    }
  }

  updateCoinInput1() {
    const coinValue2 = parseFloat(this.coinInput2.value);
    if (!isNaN(coinValue2)) {
      const coinValue1 = coinValue2 / this.exchangeRate;
      this.coinInput1.value = coinValue1.toFixed(6); // Adjust decimal places as needed
    } else {
      this.coinInput1.value = "";
    }
  }
}

// Initialize the calculator when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  new CoinExchangeCalculator();
});

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
