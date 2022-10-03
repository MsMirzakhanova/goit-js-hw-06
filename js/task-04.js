const btnDescr = document.querySelectorAll("button")[0];
//console.log(btnDescr);
const btnIncrem = document.querySelectorAll("button")[1];
//console.log(btnIncrem);

let counterValue = 0;

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
