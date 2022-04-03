const form = document.querySelector(".login-form");

form.addEventListener("submit", acceptSubmit);

function acceptSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;
  if (login.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
