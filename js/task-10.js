const refs = {
  inputValue: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};
console.log(refs.inputValue);
console.log(refs.createBtn);
console.log(refs.destroyBtn);

refs.createBtn.addEventListener("click", (event) => {
  createBox(event);
});

// --------------------- create --------------
// function createBox(amount) {
//   amount = refs.inputValue.value;
//   const firstDiv = document.createElement("div");
//   const firstDivWidth = 30;
//   const firstDivHeight = 30;
//   firstDiv.style.width = `${firstDivWidth}px`;
//   firstDiv.style.height = `${firstDivHeight}px`;
//   firstDiv.style.backgroundColor = getRandomHexColor();
//   refs.divBox.append(firstDiv);
//   let newDivWidth = firstDivWidth + 10;
//   let newDivHeight = firstDivHeight + 10;

//   for (let i = 0; i + 1 < amount; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.style.width = `${newDivWidth}px`;
//     newDiv.style.height = `${newDivHeight}px`;
//     newDiv.style.backgroundColor = getRandomHexColor();
//     refs.divBox.append(newDiv);
//     if (newDiv.previousSibling.style.width <= newDiv.style.width) {
//       newDivWidth += 10;
//       newDivHeight += 10;
//     }
//     console.log(newDiv);
//     console.log(newDiv.style.width);
//     console.log(newDiv.previousElementSibling);
//   }
// }

// --------------------- create --------------

let firstDivWidth = 30;
let firstDivHeight = 30;
function createBox(amount) {
  amount = refs.inputValue.value;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    if (firstDivWidth > newDiv.style.width) {
      firstDivWidth += 10;
      firstDivHeight += 10;
    } else {
      console.log("aisaiogj");
      firstDivWidth = 30;
      firstDivHeight = 30;
      const firstDiv = document.createElement("div");
      firstDiv.style.width = `${firstDivWidth}px`;
      firstDiv.style.height = `${firstDivHeight}px`;
      firstDiv.style.backgroundColor = getRandomHexColor();
      console.log(`${firstDivHeight} alalalalalal`);
      refs.divBox.append(firstDiv);
    }
    newDiv.style.width = `${firstDivWidth}px`;
    newDiv.style.height = `${firstDivHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(newDiv);
    console.log(newDiv);
    console.log(newDiv.style.width);
    console.log(newDiv.previousElementSibling);
  }
}

// ---------------------- destroy -------------------------
refs.destroyBtn.addEventListener("click", () => {
  for (let i = 0; i < refs.divBox.children.length; i++) {
    console.log([i]);
    refs.divBox.children[i].remove();
    [i] = [i - 1];
  }
  firstDivHeight = 30;
  firstDivWidth = 30;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
