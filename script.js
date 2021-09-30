function renderTime() {
  let moment = new Date();
  let hours = moment.getHours();
  let minutes = moment.getMinutes();
  let seconds = moment.getSeconds();

  //This is for AM or PM
  let meridiem = "AM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }
  //This is for adding to "0" (beginning of the on digit number)
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //Finnaly this is for writing on the html - respectively
  let myDigitalClock = document.getElementById("clock");
  myDigitalClock.textContent =
    hours + ":" + minutes + ":" + seconds + " " + meridiem;

  setTimeout("renderTime()", 1000);
}

renderTime();
