function timeToString(time) {
  let diffHrs = time / 3600000;
  let hh = Math.floor(diffHrs);
  
  let diffMin = (diffHrs - hh) * 60;
  let mm = Math.floor(diffMin);
  
  let diffSec = (diffMin - mm) * 60;
  let ss = Math.floor(diffSec);
  
  let diffMs = (diffSec - ss) * 100;
  let ms = Math.floor(diffMs);
  
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return(`${formattedMM}:${formattedSS}:${formattedMS}`);
}
//Declare variables
let startTime;
let elapsedTime = 0;
let timerInterval;

//Create function to modify innerHTML
/*function print(text) {
  document.querySelector("#display").innerHTML = text;
}*/

//Creat "start", "pause", and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.querySelector("#display").innerHTML = timeToString(elapsedTime);
  }, 10);
  showButton("PAUSE");
  return timeToString(elapsedTime);
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  document.querySelector("#display").innerHTML = ("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

function lap (){
  clearInterval(timerInterval)
  lap = start()
  document.querySelector("#lapSection").innerHTML = lap
}

//Create functions to display buttons

//let stopwatch = new Stopwatch;



function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}

//Create event listeners
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let resetButton = document.querySelector("#resetButton");
let lapButton = document.querySelector("#lapButton");

playButton.addEventListener("click",  start);
pauseButton.addEventListener("click",  pause);
resetButton.addEventListener("click",  reset);
lapButton.addEventListener('click',  lap)
