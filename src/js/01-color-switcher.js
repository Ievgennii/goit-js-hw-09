const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId;

btnStart.addEventListener('click', () => {
  timerId = setInterval(onChangeColor, 1000);
});

btnStop.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  console.log(newColor);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopChangeColor() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
  document.body.style.backgroundColor = '#fff';
}
