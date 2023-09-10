const content = document.getElementById('currentDay');
const currentTimeInMs = document.getElementById('currentUTCTime');
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDate = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDate];

const currentUTCTimeInMS = new Date().getTime();

document.addEventListener('DOMContentLoaded', function () {
  content.textContent = currentDayOfWeek;
  currentTimeInMs.textContent = currentUTCTimeInMS;
});
