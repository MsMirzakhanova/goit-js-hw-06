const inputRef = document.querySelector(`input`);
const inputLength = inputRef.getAttribute(`data-length`);
//let validationInput = input.getAttribute("id");
//console.log(validationInput);
//console.log(inputLength);

inputRef.addEventListener("blur", (event) => {
  if (event.target.value.length === +inputLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }

  //console.log(event.target.value);
});
