const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
  console.log(inputEl.value.length);
  console.log(inputEl.getAttribute("data-length"));

  if (
    inputEl.value.length <= inputEl.getAttribute("data-length") &&
    inputEl.value.length !== 0
  ) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else if (
    inputEl.value.length > inputEl.getAttribute("data-length") &&
    inputEl.value.length !== 0
  ) {
    inputEl.classList.add("invalid");
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
  } else {
    if (inputEl.value.length === 0) {
      inputEl.classList.remove("valid");
      inputEl.classList.remove("invalid");
    }
  }
  console.log(inputEl);
});
