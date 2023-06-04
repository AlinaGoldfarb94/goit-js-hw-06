
let counterValue = 0;

const buttonMinus = document.querySelector('button[data-action="decrement"]');
console.log (buttonMinus);
console.log(buttonMinus.dataset.action); 

buttonMinus.addEventListener("click", () => {
    console.log (counterValue -=1);
    
});

const buttonPlus = document.querySelector('button[data-action="increment"]');
console.log (buttonPlus);
console.log(buttonPlus.dataset.action);

buttonPlus.addEventListener('click', () => {
    console.log (counterValue +=1);
    
})