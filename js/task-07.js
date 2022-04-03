const refs = {
  input: document.querySelector("#font-size-control"),
  output: document.querySelector("#text"),
};

refs.input.addEventListener("input", (value) => {
  refs.output.style.fontSize = `${value.currentTarget.value}px`;
});
