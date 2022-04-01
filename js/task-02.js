const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const createListItemEl = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList = "item";
  // listEl.style.listStyle = "none";
  listEl.textContent = ingredient;
  return listEl;
});

console.log(createListItemEl);

ingredientsEl.append(...createListItemEl);
console.log(ingredientsEl);
