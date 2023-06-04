const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map((ingredient) => {
  const listIngredients = document.createElement("li");

  listIngredients.textContent = ingredient;

  listIngredients.classList.add("item");
  console.log(listIngredients);
  return listIngredients;
});
console.log(list);
const leastHTML = document.querySelector("ul");
console.log(leastHTML);

leastHTML.append(...list);
console.dir(leastHTML);
