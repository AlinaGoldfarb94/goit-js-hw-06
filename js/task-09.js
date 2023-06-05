function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const textEl = document.querySelector('.color');
console.log(textEl);

buttonEl.addEventListener('click', handleChangeColor);

function handleChangeColor (event) {
 document.body.style.backgroundColor = getRandomHexColor();
 textEl.textContent = getRandomHexColor();
}