//const inputEl = document.querySelector(`#name-input`);
//console.log(inputEl);

//const outputEl = document.querySelector(`#name-output`);
//console.log(outputEl);

const refs = {
  input: document.querySelector(`#name-input`),
  output: document.querySelector(`#name-output`),
  span: document.querySelector(`span`),
};

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
}

refs.input.addEventListener(`change`, onOutputChange);

function onOutputChange(event) {
  refs.output.disabled = !event.target.checked;
  refs.output.textContent = span.textContent;
}
