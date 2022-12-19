let valueEl = Number(document.querySelector('#value').textContent);
let  counterValue = document.querySelector('#value');

const oneButton = document.querySelector('#counter').lastElementChild;
const twoButton = document.querySelector('#counter').firstElementChild;

oneButton.addEventListener('click', el => {
    valueEl += 1;
    counterValue.textContent = valueEl;

});

twoButton.addEventListener('click', el => {
    valueEl -= 1;
    counterValue.textContent = valueEl;

});

