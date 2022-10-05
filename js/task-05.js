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
function onInputChange({ target: { value } }) {
  if (!value.trim()) {
    refs.output.textContent = "Anonymous";
    return;
  }
  refs.output.textContent = value;
}
