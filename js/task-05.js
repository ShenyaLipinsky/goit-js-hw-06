const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", (value) => {
  if (value.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = value.currentTarget.value;
  }
});

console.log(refs.input.textContent);
console.log(refs.output.currentTarget);
