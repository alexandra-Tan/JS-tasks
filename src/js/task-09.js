function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.body;

const handleClick = (event) => {
  const bodyColor = (body.style.backgroundColor = getRandomHexColor());
  nameColor.textContent = bodyColor;
};
button.addEventListener("click", handleClick);
