let timer;
let seconds = 0;
let isRunning = false;

// DOM elements
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Function to update the timer display
function updateTimerDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  // Format the time to MM:SS
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;

  timerDisplay.innerText = `${mins}:${secs}`;
}

// Start the timer
startButton.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  }
});

// Stop the timer
stopButton.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset the timer
resetButton.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateTimerDisplay();
});
