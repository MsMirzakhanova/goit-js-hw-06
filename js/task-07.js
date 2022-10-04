const controlEl = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector(`#text`);

controlEl.addEventListener("input", (event) => {
  spanTextRef.style.fontSize = controlEl.value + "px";
});
