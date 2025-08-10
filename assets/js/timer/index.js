const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

let hours = parseInt(hoursEl.getAttribute("data-hours")) || 0;
let minutes = parseInt(minutesEl.getAttribute("data-minutes")) || 0;
let seconds = parseInt(secondsEl.getAttribute("data-seconds")) || 0;

function updateDisplay() {
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

function countdown() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    alert("زمان به پایان رسید!");
    return;
  }

  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }
    }
  }
  updateDisplay();
}

updateDisplay();
const timerInterval = setInterval(countdown, 1000);