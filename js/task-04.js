
let counterValue = 0;

const valueEl = document.querySelector('#value');
console.log(valueEl);

const buttonMinus = document.querySelector('button[data-action="decrement"]');
console.log (buttonMinus);
console.log(buttonMinus.dataset.action); 

const buttonPlus = document.querySelector('button[data-action="increment"]');
console.log (buttonPlus);
console.log(buttonPlus.dataset.action);

buttonMinus.addEventListener("click", () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
    
});

buttonPlus.addEventListener('click', () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
})