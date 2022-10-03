const controlEl = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector(`#text`);

controlEl.addEventListener("click", (event) => {
  const text = spanTextRef.textContent;
  text.style.fontSize = controlEl.value;
});
