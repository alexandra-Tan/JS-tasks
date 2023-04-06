const listWithClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${listWithClass.length}`);
listWithClass.forEach((elem) => {
  const title = elem.firstElementChild.textContent;
  console.log(`Category: ${title}`);

  const listCategories = elem.lastElementChild;
  const numberCategories = listCategories.children.length;
  console.log(` Elements: ${numberCategories}`);
});
