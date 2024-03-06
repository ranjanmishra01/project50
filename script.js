const image = document.getElementById('image');
const countdownElement = document.getElementById('countdown');
const containerCountdown = document.querySelector('.countdown-container')

let countdownValue = 0;
const countdownInterval = setInterval(() => {
  countdownValue++;
  if (countdownValue <= 100) {
    image.style.filter = `blur(${10 - (countdownValue / 10)}px)`; // Adjust blur dynamically
    countdownElement.textContent = `${countdownValue}%`;
    containerCountdown.style.opacity = 1 - (countdownValue / 100);
  } else {
    clearInterval(countdownInterval);
  }
}, 50); // Adjust interval as needed
