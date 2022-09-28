const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector("#ingredients");
const elements = ingredients.map((ingredient) => {
  const ingrEl = document.createElement(`li`);
  ingrEl.textContent = ingredient;
  ingrEl.classList.add(`item`);
  return ingrEl;
});

ingrList.append(...elements);
console.log(ingrList);
