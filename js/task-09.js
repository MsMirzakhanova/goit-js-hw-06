function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(`.change-color`);
const colorRef = document.querySelector(`.color`);
const body = document.querySelector(`body`);

//console.log(btnChangeColor);

btnChangeColor.addEventListener(`click`, (event) => {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  colorRef.textContent = randomColor;
});
