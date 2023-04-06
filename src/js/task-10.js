function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
const input = createBtn.previousElementSibling;
let amount = 0;

const handleCreateClick = (event) => {
  if (amount === 0) {
    return;
  }

  createBoxes(amount);
};

const handleInput = (evt) => {
  amount = Number(evt.currentTarget.value);
};

const destroyBoxes = (evt) => {
  boxContainer.innerHTML = "";
};

createBtn.addEventListener("click", handleCreateClick);
destroyBtn.addEventListener("click", destroyBoxes);
input.addEventListener("input", handleInput);

const createBoxes = (amount) => {
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
    boxSize += 10;
  }
  boxContainer.append(...boxes);
};
