let counterValue = 0;
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(buttonDecrement);

const spanValue = document.querySelector("#value");

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const handleDecremen = (event) => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
  //   console.log(counterValue);
};

buttonDecrement.addEventListener("click", handleDecremen);

const handleIncrement = (event) => {
  counterValue += 1;
  spanValue.textContent = counterValue;
  //   console.log(counterValue);
};
buttonIncrement.addEventListener("click", handleIncrement);

console.log(spanValue.textContent);
