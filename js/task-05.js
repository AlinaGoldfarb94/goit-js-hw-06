
const inputEl = document.querySelector('input#name-input');
console.log (inputEl);

const outputEl = document.querySelector('span#name-output');
console.log (outputEl);

inputEl.addEventListener('input', (e) => {
    outputEl.textContent = e.target.value;
});


