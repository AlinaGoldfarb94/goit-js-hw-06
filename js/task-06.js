
const inputEl = document.querySelector('input');
inputEl.classList.add('#validation-input');


inputEl.addEventListener('blur', (e)=>{
    let lengthEl = inputEl.value.length;
    if (lengthEl > inputEl.dataset.length){
        inputEl.classList.add ('invalid');
    } else {
        inputEl.classList.add ('valid');
    }
})


