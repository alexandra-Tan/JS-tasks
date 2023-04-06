const input = document.querySelector("#validation-input");
console.log(input.getAttribute("data-length"));

const handblur = (event) => {
  const dataLength = event.currentTarget.getAttribute("data-length");
  const length = event.currentTarget.value.length;

  console.log(Number(dataLength));
  console.log(length);
  if (length === Number(dataLength)) {
    event.currentTarget.classList.add("valid");
    return;
  }
  event.currentTarget.classList.add("invalid");
};
input.addEventListener("blur", handblur);
