// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(spanEl);
inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value === ""){
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
    
});