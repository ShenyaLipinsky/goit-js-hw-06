const categoriesEl = document.querySelector("#categories");
const categoriesItemEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(function (number, index) {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(
    `Elements: ${categoriesItemEl[index].querySelectorAll("li").length}`
  );
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
