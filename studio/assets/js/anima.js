const coinImages = [
  "./assets/images/pin12.jpeg",
  "./assets/images/pin5.jpeg",
  "./assets/images/pin6.jpeg",
  "./assets/images/pin7.jpeg",
  "./assets/images/pin8.jpeg",
  "./assets/images/pin9.jpeg",
  "./assets/images/pin10.jpeg",
  "./assets/images/pin11.jpeg",

  "./assets/images/noderium1.jpg",
  "./assets/images/noderium2.jpg",
  "./assets/images/noderium3.jpg",
  "./assets/images/noderium4.jpg",
  "./assets/images/noderium5.jpg",
  "./assets/images/noderium6.jpg",
  "./assets/images/noderium7.jpg",
  "./assets/images/noderium8.jpg",
  "./assets/images/noderium9.jpg",

  "./assets/images/lionhead1.jpeg",
  "./assets/images/Designer (2).jpeg",
  "./assets/images/Designer.jpeg", // Coin 4
  "./assets/images/Designer2.jpeg", // Coin 5
  // Add more coin image URLs here
];

function getRandomCoinImage() {
  const randomIndex = Math.floor(Math.random() * coinImages.length);
  return coinImages[randomIndex];
}

function createCoin() {
  const coin = document.createElement("div");
  coin.classList.add("coinFlip");
  coin.style.backgroundImage = `url(${getRandomCoinImage()})`;
  coin.style.top = `${Math.random() * window.innerHeight}px`;

  // Randomly decide if the coin comes from the left or the right
  const fromLeft = Math.random() > 0.5;
  if (fromLeft) {
    coin.style.left = "-30px"; // Start off-screen on the left
    coin.style.animationName = "moveFromLeft, flip";
  } else {
    coin.style.left = "calc(100vw - 30px)"; // Start off-screen on the right
    coin.style.animationName = "moveFromRight, flip";
  }

  // Set a random duration for the horizontal movement and flipping
  const moveDuration = Math.random() * 2 + 3; // 3 to 5 seconds
  coin.style.animationDuration = `${moveDuration}s, 1s`;
  coin.style.animationDelay = `0s, ${Math.random() * 2}s`;

  document.body.appendChild(coin);

  coin.addEventListener("animationend", () => {
    coin.remove();
  });
}

setInterval(createCoin, 500);
