btnDescr.addEventListener(`click`, (event) => {
  counterValue = counterValue - 1;
  const valueEl = document.querySelector(`span`);
  valueEl.textContent = counterValue;
});

btnIncrem.addEventListener(`click`, (event) => {
  counterValue += 1;
  const valueEl = document.querySelector(`span`);
  valueEl.textContent = counterValue;
});
