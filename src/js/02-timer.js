import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import dayjs from 'dayjs';
import 'flatpickr/dist/flatpickr.min.css';

const refs =  {
day: document.querySelector('span[data-days]'),
minutes: document.querySelector('span[data-minutes]'),
hour: document.querySelector('span[data-hours]'),
seconds: document.querySelector('span[data-seconds]'),
startBtn: document.querySelector('button[data-start]')
}

refs.startBtn.addEventListener('click', onStartTime);

flatpickr(".inputTime", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose: selectedDates => {
    if(dayjs(startDateNow).isAfter(Date.now())){
      refs.startBtn.disabled = true;
    }
    startDateNow = selectedDates[0].getTime();
  },
});

let startDateNow = new Date().getTime();

function onStartTime() {
  const dataAfter = dayjs(startDateNow).isAfter(Date.now());
  if(dataAfter) {
    Notiflix.Notify.success("you have entered the correct date until the end of the war is left........");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startDateNow - currentTime;
      const { days, hours, mins, secs } = convertMs(deltaTime);
      refs.day.textContent = days;
      refs.hour.textContent = hours;
      refs.minutes.textContent = mins;
      refs.seconds.textContent = secs;
      refs.startBtn.disabled = true;
    }, 1000);
  } else{
    Notiflix.Notify.failure("Please choose a date in the future");
    // window.alert("Please choose a date in the future")
  }
  
}

function convertMs(ms) {
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
  const mins = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const secs = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, mins, secs };
}
