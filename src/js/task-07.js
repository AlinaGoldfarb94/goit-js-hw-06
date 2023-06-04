
const rangeEl = document.querySelector('#font-size-control');
console.log (rangeEl);
const textEl = document.querySelector('#text');
console.log(textEl);


rangeEl.addEventListener('input', function (event) {
    textEl.style.fontSize = this.value + 'px';
});


