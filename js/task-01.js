const categoriesEl = document.querySelector("#categories");
const categoriesItemEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItemEl.length}`);

const clgOfElements = function (callback, index) {
  const getInfo = console.log(
    `Category: ${categoriesItemEl[index].firstElementChild.textContent}`
  );
  console.log(
    `Elements: ${categoriesItemEl[index].querySelectorAll("li").length}`
  );
  return getInfo;
};

clgOfElements(categoriesEl.children, 0);
clgOfElements(categoriesEl.children, 1);
clgOfElements(categoriesEl.children, 2);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
