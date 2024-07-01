// script.js
class PopUpManager {
  constructor() {
    this.clickableArea = document.getElementById("clickable-area");
    this.clickableArea.addEventListener("click", this.handleClick.bind(this));
    this.clickCount = 100;
    this.currentAmout = 30124123;
  }

  formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }
  handleClick(event) {
    this.currentAmout++;
    const x = event.clientX;
    const y = event.clientY;

    this.createPopup(x, y);
    this.createReaction(x, y);
    document.getElementById("currentAmout").innerHTML = this.formatNumber(this.currentAmout);
  }

  createPopup(x, y) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    popup.textContent = "+" + this.clickCount;

    this.clickableArea.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);
  }

  createReaction(x, y) {
    const reaction = document.createElement("div");
    reaction.className = "reaction";
    reaction.style.left = `${x - 10}px`; // Center the reaction
    reaction.style.top = `${y - 10}px`; // Center the reaction

    this.clickableArea.appendChild(reaction);

    setTimeout(() => {
      reaction.remove();
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PopUpManager();
});
