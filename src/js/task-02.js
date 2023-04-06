const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

const markup = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList.add("item");

  return item;
});
list.append(...markup);
console.log(markup);
