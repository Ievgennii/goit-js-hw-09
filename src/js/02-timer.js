// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// const myDatePicker = document.getElementById("datetime-picker");
let myDatePicker;

const inputEl = document.querySelector('input[type="text"]');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');
btnStart.disabled = true;
inputEl.disabled = false;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    myDatePicker = selectedDates[0] - options.defaultDate;

    compareDates(options.defaultDate, selectedDates[0]);
    
  },
};

btnStart.addEventListener('click',counter);

flatpickr('#datetime-picker', options);

function compareDates(Date, DatePicker) {
  if (DatePicker <= Date) {
    // alert('Please choose a date in the future');
    Notiflix.Notify.info('Please choose a date in the future');
    btnStart.disabled = true;
  } else {
    btnStart.disabled = false;    
  }
}

function counter() {
  inputEl.disabled = true;

  setInterval(() => {
    btnStart.removeEventListener('click',counter);
    if (myDatePicker >= 1000)
    {myDatePicker = myDatePicker - 1000;
    seconds.textContent = convertMs(myDatePicker).seconds;
    minutes.textContent = convertMs(myDatePicker).minutes;
    hours.textContent = convertMs(myDatePicker).hours;
    days.textContent = convertMs(myDatePicker).days;
    console.log(myDatePicker);}
  }, 1000);
  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}