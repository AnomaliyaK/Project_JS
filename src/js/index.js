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
const $TASKS_CARD_LIST = document.querySelector('.tasks-card-list');
const $TASKS_CARD_COUNTER_OUT = document.querySelector(
  '.tasks-card-counter-out'
);
let $TASKS_CARD_LIST_INPROGRESS_BTN_ALL;
let $TASKS_CARD_LIST_REMOVE_BTN_ALL;

const $INPROGRESS_CARD_LIST = document.querySelector('.inprogress-card-list');
const $INPROGRESS_CARD_COUNTER_OUT = document.querySelector(
  '.inprogress-card-counter-out'
);
const $DONE_CARD_LIST = document.querySelector('.done-card-list');
const $DONE_CARD_COUNTER_OUT = document.querySelector('.done-card-counter-out');

// let btn = document.querySelector('.navigation-inprogress-remove_btn');
// btn.addEventListener('click', tasksCardCleanUp);

// 1-текущая дата

const data = new Date();
const day = data.getDate();
const month = data.getMonth() + 1;
const year = data.getFullYear();

if (day < 10 && month < 10) {
  $CURRENT_DATA.textContent = `0${day}.0${month}.${year} `;
} else if (day < 10 && month > 9) {
  $CURRENT_DATA.textContent = `0${day}.${month}.${year} `;
} else if (day > 9 && month < 10) {
  $CURRENT_DATA.textContent = `${day}.0${month}.${year} `;
} else $CURRENT_DATA.textContent = `${day}.${month}.${year} `;
console.log($CURRENT_DATA.textContent);

// 2-Вызов панели создания таска

const showCreaterPanel = () => {
  $CREATER_PANEL.classList.remove('active');
};
$NAVIGATION_CREATE_BTN.addEventListener('click', showCreaterPanel);

// 3-Закрытие панели создания таска

const closeCreaterPanel = () => {
  $CREATER_PANEL.classList.add('active');
};
$CREATER_PANEL_CANCEL_BTN.addEventListener('click', closeCreaterPanel);
$CREATER_PANEL_CLOSE_BTN.addEventListener('click', closeCreaterPanel);

// 4-Валидация инпутов isValid, isDisabled

let input = document.querySelectorAll('input');

function isValid() {
  for (let i = 0; i < input.length - 1; i++) {
    input[i].addEventListener('input', () => {
      input[i + 1].disabled = false;
    });
  }
}
isValid();

function isDisabled() {
  for (let i = 0; i < input.length - 1; i++) {
    input[i + 1].disabled = true;
  }
}

// 5 - функция-конструктор. Создание записи

function GetData(title, description, author) {
  this.title = title;
  this.description = description;
  this.author = author;
  this.status = false;

  //   this.status = false;
}

// 6 - функция очистки инпутов
const clearValue = (elem) => {
  elem.value = '';
};

// 7 - функция вывода записи ToDo на экран

const createMakeToDo = (data, index) => {
  return `
    <div class="tasks-card-list-item" id="${index}">${index}
      <div class="tasks-card-list-wrap">
        <div class="tasks-card-list-logo">ToDo</div>
        <div class="current_data">${$CURRENT_DATA.textContent}</div>
      </div>
      <h2 class="tasks-card-list-title">${data.title}</h2>
      <div class="tasks-card-list-description">
      ${data.description}
      </div>
      <div class="wrap">
        <div class="tasks-card-list-author">${data.author}</div>
        <div class="tasks-card-list-buttons">
          <button class="tasks-card-list-buttons-inprogress_btn">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="tasks-card-list-buttons-remove_btn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>`;
};

// const tasksCardCleanUp = () => {
//   return `<div class="tasks-card-list">`;
// };

const createInProgress = (data) => {
  return `
  <div class="inprogress-card-list-item">
                <div class="inprogress-card-list-wrap">
                  <div class="inprogress-card-list-logo">ToDo</div>
                  <div class="current_data">${$CURRENT_DATA.textContent}</div>
                </div>
                <h2 class="inprogress-card-list-title">${data.title}</h2>
                <div class="inprogress-card-list-description">
                ${data.description}
                </div>
                <div class="wrap">
                  <div class="inprogress-card-list-author">${data.author}</div>
                  <div class="inprogress-card-list-buttons">
                    <button class="inprogress-card-list-buttons-inmake_btn">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="inprogress-card-list-buttons-indone_btn">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button class="inprogress-card-list-buttons-remove_btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>`;
};

const createDone = (data) => {
  return `
  <div class="done-card-list-item">
                <div class="done-card-list-wrap">
                  <div class="done-card-list-logo">ToDo</div>
                  <div class="current_data">${$CURRENT_DATA.textContent}</div>
                </div>
                <h2 class="done-card-list-title">${data.title}</h2>
                <div class="done-card-list-description">
                ${data.description}
                </div>
                <div class="wrap">
                  <div class="done-card-list-author">${data.author}</div>
                  <div class="done-card-list-buttons">
                    <button class="done-card-list-buttons-inprogress_btn">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="done-card-list-buttons-remove_btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>`;
};

// По кнопке очистка всего столбца
$NAVIGATION_REMOVE_BTN.addEventListener('click', () => {
  makeToDo.splice(0, makeToDo.length);
  console.log(makeToDo);
  $TASKS_CARD_LIST.innerHTML = [];
  $TASKS_CARD_COUNTER_OUT.innerHTML = 0;
  saveMakeToDo(makeToDo);
});

// localStorage
const saveMakeToDo = (arr) => {
  localStorage.setItem('makeToDo', JSON.stringify(arr));
};
const saveInProgress = (arr) => {
  localStorage.setItem('inProgress', JSON.stringify(arr));
};

// удаление поста
function removeTask(e) {
  e.target.closest('.tasks-card-list-item').remove();
}
// получение записи из localStorage
let makeToDo = JSON.parse(localStorage.getItem('makeToDo')) || [];
let inProgress = JSON.parse(localStorage.getItem('inProgress')) || [];
let done = JSON.parse(localStorage.getItem('done')) || [];

//Вывод на страницу
function localArr() {
  if (makeToDo !== []) {
    makeToDo.forEach(function (item, index) {
      $TASKS_CARD_LIST.innerHTML += createMakeToDo(item, index);
      $TASKS_CARD_COUNTER_OUT.innerHTML = index + 1;
    });
    if (inProgress !== []) {
      inProgress.forEach(function (item, index) {
        $INPROGRESS_CARD_LIST.innerHTML += createInProgress(item, index);
        $INPROGRESS_CARD_COUNTER_OUT.innerHTML = index + 1;
      });

      // Удаление task из листа

      $TASKS_CARD_LIST_REMOVE_BTN_ALL = document.querySelectorAll(
        '.tasks-card-list-buttons-remove_btn'
      );
      $TASKS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
        item.addEventListener('click', function (index) {
          console.log(index);
          makeToDo.splice(index, 1);
          console.log(makeToDo);
          saveMakeToDo(makeToDo);
          $TASKS_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
        });
      });
      $TASKS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
        item.addEventListener('click', removeTask);
      });

      //Перенос таска в in progress
      $TASKS_CARD_LIST_INPROGRESS_BTN_ALL = document.querySelectorAll(
        '.tasks-card-list-buttons-inprogress_btn'
      );

      $TASKS_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
        item.addEventListener('click', function (index) {
          // inProgress.push(makeToDo[index]);
          inProgress = inProgress.concat(makeToDo.splice(index, 1));
          console.log(inProgress);
          //
          saveInProgress(inProgress);

          // makeToDo.splice(index, 1);
          // console.log(makeToDo);
          saveMakeToDo(makeToDo);
          $TASKS_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
          $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
        });
      });
      $TASKS_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
        item.addEventListener('click', removeTask);
      });
    }
  }
}
localArr();

// saveMakeToDo(makeToDo);

// КНОПКИ

//  1-Нажатие кнопки создания таска
$CREATER_PANEL_CREATE_BTN.addEventListener('click', (e) => {
  // отключение перезагрузки страницы по клику
  // e.preventDefault();

  //создаем объект из инпутов
  let task = new GetData(
    $CREATER_PANEL_TITLE.value,
    $CREATER_PANEL_DESCRIPTION.value,
    $CREATER_PANEL_AUTHOR.value
  );

  console.log(task);

  // добавление объекта в массив
  makeToDo.push(task);

  // сохранение записи из localStorage
  saveMakeToDo(makeToDo);
  console.log(makeToDo);

  //очищаем инпуты
  clearValue($CREATER_PANEL_TITLE);
  clearValue($CREATER_PANEL_DESCRIPTION);
  clearValue($CREATER_PANEL_AUTHOR);
  isDisabled();
});

// По кнопке удаление одного элемента
