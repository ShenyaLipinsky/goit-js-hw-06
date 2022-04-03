const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const refs = {
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

const onDecrementAction = refs.decrementEl.addEventListener(
  "click",
  function () {
    counter.decrement(), (refs.valueEl.textContent = counter.value);
  }
);
const onIncrementAction = refs.incrementEl.addEventListener(
  "click",
  function () {
    counter.increment(), (refs.valueEl.textContent = counter.value);
  }
);
