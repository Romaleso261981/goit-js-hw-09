import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const day = document.querySelector('span[data-days]');
const minutes = document.querySelector('span[data-minutes]');
const hour = document.querySelector('span[data-hours]');
const seconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]')
let inputDate = document.querySelector('#datetime-picker')

startBtn.addEventListener('click', onStartTime)


flatpickr(".inputTime", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const newData = selectedDates
      console.log(newData);
    },
  });

  console.log(inputDate);

// inputDate = flatpickr('datetime-picker', {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// });

// Notiflix.Notify.success('все пройшло успішно');
// Notiflix.Notify.warning('Memento te hominem esse', () => {
//   console.log('привіт');
// });

const startDataNaw = 1000000000000000

function onStartTime() {
    setInterval(() => {
        const currentTime = Date.now()
        const deltaTime = startDataNaw - currentTime;
      console.log("start function");
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        console.log(days);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        day.textContent = days;
        hour.textContent = hours;
        minutes.textContent = minutes;
        seconds.textContent = seconds;
      }, 1000);
}

function convertMs(ms) {
    console.log(ms);
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const days = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
//   );
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }
