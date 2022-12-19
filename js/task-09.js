function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const saveButton = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('span.color');

saveButton.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;

});
