const refs = {
  inputValue: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
  divEl: document.querySelector("#boxes div"),
};
console.log(refs.inputValue);
console.log(refs.createBtn);
console.log(refs.destroyBtn);

refs.createBtn.addEventListener("click", (event) => {
  createBox(event);
});
function createBox(amount) {
  amount = refs.inputValue.value;
  const firstDiv = document.createElement("div");
  const firstDivWidth = 30;
  const firstDivHeight = 30;
  firstDiv.style.width = `${firstDivWidth}px`;
  firstDiv.style.height = `${firstDivHeight}px`;
  firstDiv.style.backgroundColor = getRandomHexColor();
  refs.divBox.append(firstDiv);
  let newDivWidth = firstDivWidth + 10;
  let newDivHeight = firstDivHeight + 10;

  for (let i = 0; i + 1 < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${newDivWidth}px`;
    newDiv.style.height = `${newDivHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(newDiv);
    if (newDiv.previousSibling.style.width <= newDiv.style.width) {
      newDivWidth += 10;
      newDivHeight += 10;
    }
    console.log(newDiv);
    console.log(newDiv.style.width);
    console.log(newDiv.previousElementSibling);
  }
}
refs.destroyBtn.addEventListener("click", (array) => {
  deleteElts(array);
});

function deleteElts() {
  const array = refs.divBox.children;
  console.log(array);
  array.forEach((element) => {
    element.remove();
  });
  return array;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
