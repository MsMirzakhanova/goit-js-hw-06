function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector(`#controls > input`);
//console.log(input);

const amount = input.target.value;
console.log(amount);
