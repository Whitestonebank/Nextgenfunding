// Countdown Timer for 5 hours from page load
const countdownElement = document.getElementById("countdown");
const endTime = new Date().getTime() + 5 * 60 * 60 * 1000;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "EXPIRED";
    return;
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ✅ Confirm Button Click Behavior
const confirmButton = document.querySelector(".confirm-btn");
confirmButton.addEventListener("click", () => {
  alert("To get verified, please contact a NextGenFunding official.");
});
