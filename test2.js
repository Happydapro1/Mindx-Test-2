// an object to keep track of active intervals for each timer by their IDs.
let intervals = {};

// function to start the timer for a specific ID
function startTimer(id) {
  // initialize the time variable to keep track of elapsed time in seconds
  let time = 0;
  // select the display element for this specific timer using its ID
  const display = document.getElementById(`display${id}`);

  // stop any existing timer for this ID to avoid multiple intervals running simultaneously
  stopTimer(id);

  // start a new interval for this timer, and store its ID in the intervals object
  intervals[id] = setInterval(() => {
    // increase time by 1 every second (each time this function runs)
    time++;
    // calculate minutes by dividing the time by 60, and format with two digits
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    // calculate seconds by taking time modulo 60, and format with two digits
    const seconds = String(time % 60).padStart(2, '0');
    // update the display text to show the current time in "mm:ss" format
    display.textContent = `${minutes}:${seconds}`;
  }, 1000); // run the function every 1000 milliseconds (1 second)
}

// function to stop the timer for a specific ID
function stopTimer(id) {
  // clear the interval associated with this timer ID to stop it from running
  clearInterval(intervals[id]);
  // reset the display for this timer to show "00:00"
  document.getElementById(`display${id}`).textContent = '00:00';
}

// function to stop all timers at once
function stopAllTimers() {
  // loop over each timer ID in the intervals object
  for (let id in intervals) {
    // Stop each timer by calling stopTimer with the current ID
    stopTimer(id);
  }
}
