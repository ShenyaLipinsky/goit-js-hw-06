const form = document.querySelector(".login-form");

form.addEventListener("submit", acceptSubmit);

function acceptSubmit(event) {
  event.preventDefault();
  {
    const {
      elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
      alert(`Input can't be empty`);
    } else {
      const submitValues = {
        Email: email.value,
        Password: password.value,
      };
      event.currentTarget.reset();
      console.log(submitValues);
    }
  }
}
