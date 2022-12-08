console.log('Aloha');

// Переменные

const $CURRENT_DATA = document.querySelector('.current_data');

const $NAVIGATION_CREATE_BTN = document.querySelector('.navigation-create_btn');
const $NAVIGATION_REMOVE_BTN = document.querySelector('.navigation-remove_btn');

const $CREATER_PANEL = document.querySelector('.creater_panel');
const $CREATER_PANEL_CANCEL_BTN = document.querySelector(
  '.creater_panel-cancel_btn'
);
const $CREATER_PANEL_CLOSE_BTN = document.querySelector(
  '.creater_panel-close_btn'
);
const $CREATER_PANEL_CREATE_BTN = document.querySelector(
  '.creater_panel-create_btn'
);

const $CREATER_PANEL_FORM = document.querySelector('form');
const $CREATER_PANEL_TITLE = document.querySelector(
  '.creater_panel-title_input'
);
const $CREATER_PANEL_DESCRIPTION = document.querySelector(
  '.creater_panel-description_input'
);
const $CREATER_PANEL_AUTHOR = document.querySelector(
  '.creater_panel-author_input'
);
const $TASKS_CARD_LIST_ITEM = document.querySelector('.tasks-card-list-item');

// текущая дата
const data = new Date();
const day = data.getDate();
const month = data.getMonth() + 1;
const year = data.getFullYear();

if (day >= 1 && day <= 9 && month >= 1 && month <= 9) {
  $CURRENT_DATA.textContent = `0${day}.0${month}.${year} `;
} else if (day >= 1 && day <= 9 && month > 9) {
  $CURRENT_DATA.textContent = `0${day}.${month}.${year} `;
} else if (day > 9 && month >= 1 && month <= 9) {
  $CURRENT_DATA.textContent = `${day}.0${month}.${year} `;
} else $CURRENT_DATA.textContent = `${day}.${month}.${year} `;

// Вызов панели создания таска

const showCreaterPanel = () => {
  $CREATER_PANEL.classList.remove('active');
};
$NAVIGATION_CREATE_BTN.addEventListener('click', showCreaterPanel);

// Закрытие панели создания таска

const closeCreaterPanel = () => {
  $CREATER_PANEL.classList.add('active');
};
$CREATER_PANEL_CANCEL_BTN.addEventListener('click', closeCreaterPanel);
$CREATER_PANEL_CLOSE_BTN.addEventListener('click', closeCreaterPanel);

// Валидация инпутов

// let input = document.querySelectorAll('input');

// function isValid() {
//   for (i = 0; i < input.length; i++) {
//     if (input[i].value) {
//       input[i + 1].disabled = false;
//     }
//   }
// }
// isValid();

// function isValid() {
//   for (i = 0; i < input.length; i++) {
//     if (input[i].value == '') {
//       $CREATER_PANEL_CREATE_BTN.disabled = true;
//     } else {
//       $CREATER_PANEL_CREATE_BTN.disabled = false;
//     }
//   }
// }
// const isValid = (elem) => {
//   elem.addEventListener('input', () => {
//     if (elem.value) {
//       elem.nextElementSibling.disabled = false;
//     }
//   });
// };

///////// Нажатие кнопки создания таска///////////

let makeToDo = [];

// функция конструктор
function GetData(title, description, author) {
  this.title = title;
  this.description = description;
  this.author = author;
  this.status = false;
}

$CREATER_PANEL_CREATE_BTN.addEventListener('click', (e) => {
  // отключение перезагрузки страницы по клику
  e.preventDefault();

  let task = new GetData(
    $CREATER_PANEL_TITLE.value,
    $CREATER_PANEL_DESCRIPTION.value,
    $CREATER_PANEL_AUTHOR.value
  );
  console.log(task);
  makeToDo.push(task);
  console.log(makeToDo);
  clearValue($CREATER_PANEL_TITLE);
  clearValue($CREATER_PANEL_DESCRIPTION);
  clearValue($CREATER_PANEL_AUTHOR);
  localUpdate();
  //   createTemplate();
});

// функция очистки инпутов
const clearValue = (elem) => {
  elem.value = '';
};

//функция сохранения истории после перезагрузки
const localUpdate = () => {
  let str = JSON.stringify(makeToDo);
  localStorage.setItem('key', str);
  console.log(str);
};

// функция вывода записи ToDo на экран

// const createTemplate = (data) => {
//   return `
//     <div class="tasks-card-list-item">
//       <div class="tasks-card-list-wrap">
//         <div class="tasks-card-list-logo">ToDo</div>
//         <div class="current_data">09.02.2022</div>
//       </div>
//       <h2 class="tasks-card-list-title">${data.title}</h2>
//       <div class="tasks-card-list-description">
//       ${data.description}
//       </div>
//       <div class="wrap">
//         <div class="tasks-card-list-author">${data.author}</div>
//         <div class="tasks-card-list-buttons">
//           <button class="tasks-card-list-buttons-inprogress_btn">
//             <i class="fa-solid fa-arrow-right"></i>
//           </button>
//           <button class="tasks-card-list-buttons-remove_btn">
//             <i class="fa-solid fa-trash"></i>
//           </button>
//         </div>
//       </div>
//     </div>`;
// };
