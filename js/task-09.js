const refs = {
  widget: document.querySelector("#widget"),
  colorId: document.querySelector("span.color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", (event) => {
  event = getRandomHexColor();
  refs.colorId.textContent = event;
  document.body.style.backgroundColor = event;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
