const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')




const newYear = "1 Jan 2021";

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;


  daysEl.innerHTML= formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML =formatTime(seconds)
 
}

function formatTime(time){
    return time < 10 ? (`0${time}` ): time;

}

countDown();
setInterval(countDown, 1000);
