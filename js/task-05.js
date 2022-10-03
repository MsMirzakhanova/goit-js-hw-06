//const inputEl = document.querySelector(`#name-input`);
//console.log(inputEl);

//const outputEl = document.querySelector(`#name-output`);
//console.log(outputEl);

const refs = {
  input: document.querySelector(`#name-input`),
  output: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
}
