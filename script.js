// script.js
const previewButton = document.getElementById('preview-button');

// Function to calculate and update the countdown timer
function updateCountdown() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = newYearDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML content
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // If the countdown reaches zero, stop the interval and display a message
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = '<h3>Happy New Year 2025! 🎉</h3>';
    }
}
previewButton.addEventListener('click', () => {
  gsap.fromTo(
      timerElement,
      { scale: 1, color: '#fff' },
      { scale: 1.5, color: '#FFD700', duration: 0.5, yoyo: true, repeat: 1 }
  );

  alert('Happy New Year 2025!');
});
// Run the countdown update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
