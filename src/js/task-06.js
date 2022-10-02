const inputRef = document.querySelector(`input`);
const inputLength = inputRef.getAttribute(`data-length`);
//let validationInput = input.getAttribute("id");
//console.log(validationInput);
console.log(inputLength);

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
