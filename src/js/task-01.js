const itemLinks = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemLinks.length);

itemLinks.forEach(function (itemLink) {
  const titleEl = itemLink.firstElementChild;
  console.log(`Category:`, titleEl.textContent);

  const categoriesList = itemLink.lastElementChild;
  const numbOfCateg = categoriesList.children;
  console.log(`Elements:`, numbOfCateg.length);
});
