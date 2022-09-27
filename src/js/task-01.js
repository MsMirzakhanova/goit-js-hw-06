const itemLink = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemLink.length);

const titleEl = document.querySelectorAll("h2");
console.log(`Category:`, titleEl[0].textContent);

const numbOfEl = titleEl.lastElementChild;
console.log(numbOfEl);

//const numbOfEl = titleEl.querySelectorAll("li");
//console.log(`Elements:`, numbOfEl);
