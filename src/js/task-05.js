const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputName = (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymoys";
    return;
  }
  output.textContent = event.currentTarget.value;
};
textInput.addEventListener("input", inputName);
