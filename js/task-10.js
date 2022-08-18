// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один 
// параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
//  на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое 
// div#boxes, тем самым удаляя все созданные элементы.



const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

let amount = null;
inputEl.addEventListener('input', (event) =>{
  amount = event.currentTarget.value;
});

btnCreate.addEventListener('click', () =>{
  console.log(createBoxes(amount))
} );


function createBoxes(amount){
  let width = 30;
  let height = 30;

for (let i = 0; i < amount; i+=1){
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const color = getRandomHexColor();
  const nextBox = document.createElement('div');
  nextBox.style.width = `${width}px`;
  width +=10;
  nextBox.style.height= `${height}px`;
  height +=10;
  nextBox.style.backgroundColor = `${color}`;
  boxEl.append(nextBox);
  btnDestroy.addEventListener('click', ()=>{
    nextBox.remove()
  } )

}

}
