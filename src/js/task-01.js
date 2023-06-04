// "use strict";

const itemEl = document.querySelectorAll(".item");
// console.log(itemEl);
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
