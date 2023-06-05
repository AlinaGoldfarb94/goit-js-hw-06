
const inputEl = document.getElementById('name-input');
console.log (inputEl);

const outputEl = document.getElementById('name-output');
console.log (outputEl);

inputEl.addEventListener('input', (e) => {
    outputEl.textContent = e.target.value.trim();
    if (inputEl.value.trim() === '') {
outputEl.textContent = 'Anonimus';
    };
});


