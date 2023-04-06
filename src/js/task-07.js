const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const handinput = (event) => {
  output.style.fontSize = event.currentTarget.value + "px";
};
input.addEventListener("input", handinput);
