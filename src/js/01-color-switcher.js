const refs = {
  start: document.querySelector('button[data-start]'),
  finish: document.querySelector('button[data-stop]'),
};

let timeOutId = null;

refs.start.addEventListener('click', onStartTime);
refs.finish.addEventListener('click', offStartTime);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartTime() {
  timeOutId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
  refs.start.disabled = true;
  refs.finish.disabled = false;
}

function offStartTime() {
  clearInterval(timeOutId);
  refs.finish.disabled = true;
  refs.start.disabled = false;
}
