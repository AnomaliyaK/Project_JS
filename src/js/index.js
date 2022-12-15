console.log('Aloha');

// Переменные

const $CURRENT_DATA = document.querySelector('.current_data');

const $NAVIGATION_CREATE_BTN = document.querySelector('.navigation-create_btn');
const $NAVIGATION_REMOVE_BTN = document.querySelector('.navigation-remove_btn');
const $NAVIGATION_INPROGRESS_REMOVE_BTN = document.querySelector(
  '.navigation-inprogress-remove_btn'
);
const $NAVIGATION_DONE_REMOVE_BTN = document.querySelector(
  '.navigation-done-remove_btn'
);

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

let $TASKS_CARD_LIST = document.querySelector('.tasks-card-list');
const $TASKS_CARD_COUNTER_OUT = document.querySelector(
  '.tasks-card-counter-out'
);
const $INPROGRESS_CARD_LIST = document.querySelector('.inprogress-card-list');
const $INPROGRESS_CARD_COUNTER_OUT = document.querySelector(
  '.inprogress-card-counter-out'
);
const $DONE_CARD_LIST = document.querySelector('.done-card-list');
const $DONE_CARD_COUNTER_OUT = document.querySelector('.done-card-counter-out');

let $TASKS_CARD_LIST_INPROGRESS_BTN_ALL;
let $TASKS_CARD_LIST_REMOVE_BTN_ALL;
let $INPROGRESS_CARD_LIST_INMAKETODO_BTN_ALL;
let $INPROGRESS_CARD_LIST_INDONE_BTN_ALL;
let $INPROGRESS_CARD_LIST_REMOVE_BTN_ALL;
let $DONE_CARD_LIST_INPROGRESS_BTN_ALL;
let $DONE_CARD_LIST_REMOVE_BTN_ALL;

let html = document.querySelector('html');

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

// 2-Вызов панели создания таска
const showCreaterPanel = () => {
  $CREATER_PANEL.classList.remove('active');
  html.style.overflow = 'hidden';
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
      $CREATER_PANEL_CREATE_BTN.disabled = false;
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
  this.id = Math.random().toString(36).substring(7);
  this.title = title;
  this.description = description;
  this.author = author;
  this.status = false;
}

// 6 - функция очистки инпутов
const clearValue = (elem) => {
  elem.value = '';
};

// 7 - функции вывода записи на экран
const createMakeToDo = (data) => {
  return `
    <div class="tasks-card-list-item" id="${data.id}">
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
          <button class="tasks-card-list-buttons-inprogress_btn" id="${data.id}">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="tasks-card-list-buttons-remove_btn" id="${data.id}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>`;
};
const createInProgress = (data) => {
  return `
  <div class="inprogress-card-list-item" id="${data.id}">
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
                    <button class="inprogress-card-list-buttons-inmake_btn" id="${data.id}">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="inprogress-card-list-buttons-indone_btn" id="${data.id}">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button class="inprogress-card-list-buttons-remove_btn" id="${data.id}">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>`;
};
const createDone = (data) => {
  return `
  <div class="done-card-list-item" id="${data.id}">
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
                    <button class="done-card-list-buttons-inprogress_btn" id="${data.id}">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="done-card-list-buttons-remove_btn" id="${data.id}">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>`;
};

// 8-функции записи в localStorage
const saveMakeToDo = (arr) => {
  localStorage.setItem('makeToDo', JSON.stringify(arr));
};
const saveInProgress = (arr) => {
  localStorage.setItem('inProgress', JSON.stringify(arr));
};
const saveDone = (arr) => {
  localStorage.setItem('done', JSON.stringify(arr));
};

// 9-получение записи из localStorage
let makeToDo = JSON.parse(localStorage.getItem('makeToDo')) || [];
let inProgress = JSON.parse(localStorage.getItem('inProgress')) || [];
let done = JSON.parse(localStorage.getItem('done')) || [];

// 10-удаление html записи из списка
function removeTask(e) {
  e.target.closest('.tasks-card-list-item').remove();
}

function removeInProgress(e) {
  e.target.closest('.inprogress-card-list-item').remove();
}

function removeDone(e) {
  e.target.closest('.done-card-list-item').remove();
}

//11-Вывод на страницу
// function localArr() {
if (makeToDo !== []) {
  makeToDo.forEach(function (item, index) {
    $TASKS_CARD_LIST.innerHTML += createMakeToDo(item);
    $TASKS_CARD_COUNTER_OUT.innerHTML = index + 1;
  });
}
if (inProgress !== []) {
  inProgress.forEach(function (item, index) {
    $INPROGRESS_CARD_LIST.innerHTML += createInProgress(item, index);
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = index + 1;
  });
}
if (done !== []) {
  done.forEach(function (item, index) {
    $DONE_CARD_LIST.innerHTML += createDone(item, index);
    $DONE_CARD_COUNTER_OUT.innerHTML = index + 1;
  });
}

//12-Функция поиска элемента по id
function findElementById(array, id) {
  array.forEach((item, index) => {
    if (item.id === id) {
      arr_index = index;
    }
  });
  return arr_index;
}

//////////////////////////////////////////////////////////     КНОПКИ      ///////////////////////////////////////////////////////////////

// +13-ОЧИСТКА СТОЛБЦОВ ПО КНОПКЕ В NAVIGATION
// По кнопке очистка всего столбца MakeToDo
$NAVIGATION_REMOVE_BTN.addEventListener('click', () => {
  makeToDo.splice(0, makeToDo.length);

  $TASKS_CARD_LIST.innerHTML = [];
  $TASKS_CARD_COUNTER_OUT.innerHTML = 0;
  saveMakeToDo(makeToDo);
});
// По кнопке очистка всего столбца InProgress
$NAVIGATION_INPROGRESS_REMOVE_BTN.addEventListener('click', () => {
  inProgress.splice(0, inProgress.length);

  $INPROGRESS_CARD_LIST.innerHTML = [];
  $INPROGRESS_CARD_COUNTER_OUT.innerHTML = 0;
  saveInProgress(inProgress);
});
// По кнопке очистка всего столбца Done
$NAVIGATION_DONE_REMOVE_BTN.addEventListener('click', () => {
  done.splice(0, done.length);
  $DONE_CARD_LIST.innerHTML = [];
  $DONE_CARD_COUNTER_OUT.innerHTML = 0;
  saveDone(done);
});

// 14-УДАЛЕНИЕ ЗАДАЧ ИЗ СПИСКА ПО КНОПКУ МУСОРКИ В КАРТОЧКЕ

// +Удаление task из MakeToDo по кнопке мусорки в карточке
$TASKS_CARD_LIST_REMOVE_BTN_ALL = document.querySelectorAll(
  '.tasks-card-list-buttons-remove_btn'
);

$TASKS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function () {
    let id = item.getAttribute('id');
    makeToDo.splice(findElementById(makeToDo, id), 1);
    saveMakeToDo(makeToDo);
    $TASKS_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
  });
});
$TASKS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeTask);
});

// +Удаление task из InProgress по кнопке мусорки в карточке
$INPROGRESS_CARD_LIST_REMOVE_BTN_ALL = document.querySelectorAll(
  '.inprogress-card-list-buttons-remove_btn'
);
$INPROGRESS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    inProgress.splice(findElementById(inProgress, id), 1);
    saveInProgress(inProgress);
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
  });
});
$INPROGRESS_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeInProgress);
});

// +Удаление task из Done по кнопке мусорки в карточке
$DONE_CARD_LIST_REMOVE_BTN_ALL = document.querySelectorAll(
  '.done-card-list-buttons-remove_btn'
);
$DONE_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    done.splice(findElementById(done, id), 1);
    saveDone(done);
    $DONE_CARD_COUNTER_OUT.innerHTML = done.length;
  });
});
$DONE_CARD_LIST_REMOVE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeDone);
});

// 15-ПЕРЕНОС ТАСКОВ ИЗ ОДНОЙ КОЛОНКИ В ДРУГУЮ

//+Перенос таска из MakeToDo в inProgress
$TASKS_CARD_LIST_INPROGRESS_BTN_ALL = document.querySelectorAll(
  '.tasks-card-list-buttons-inprogress_btn'
);

$TASKS_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    inProgress = inProgress.concat(
      makeToDo.splice(findElementById(makeToDo, id), 1)
    );

    saveInProgress(inProgress);
    saveMakeToDo(makeToDo);
    $TASKS_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
    $INPROGRESS_CARD_LIST.innerHTML += createInProgress(
      inProgress[findElementById(inProgress, id)]
    );
    window.location.reload();
  });
});
$TASKS_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeTask);
});

//+Перенос таска из inProgress в MakeToDo
$INPROGRESS_CARD_LIST_INMAKETODO_BTN_ALL = document.querySelectorAll(
  '.inprogress-card-list-buttons-inmake_btn'
);
$INPROGRESS_CARD_LIST_INMAKETODO_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    makeToDo = makeToDo.concat(
      inProgress.splice(findElementById(inProgress, id), 1)
    );

    saveInProgress(inProgress);
    saveMakeToDo(makeToDo);
    $TASKS_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
    $TASKS_CARD_LIST.innerHTML += createMakeToDo(
      makeToDo[findElementById(makeToDo, id)]
    );
    window.location.reload();
  });
});
$INPROGRESS_CARD_LIST_INMAKETODO_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeInProgress);
});

//+Перенос таска из inProgress в Done
$INPROGRESS_CARD_LIST_INDONE_BTN_ALL = document.querySelectorAll(
  '.inprogress-card-list-buttons-indone_btn'
);

$INPROGRESS_CARD_LIST_INDONE_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    done = done.concat(inProgress.splice(findElementById(inProgress, id), 1));

    saveInProgress(inProgress);
    saveDone(done);
    $DONE_CARD_COUNTER_OUT.innerHTML = done.length;
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
    $DONE_CARD_LIST.innerHTML += createDone(done[findElementById(done, id)]);
    window.location.reload();
  });
});
$INPROGRESS_CARD_LIST_INMAKETODO_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeInProgress);
});

//+Перенос таска из Done в inProgress
$DONE_CARD_LIST_INPROGRESS_BTN_ALL = document.querySelectorAll(
  '.done-card-list-buttons-inprogress_btn'
);

$DONE_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
  item.addEventListener('click', function (index) {
    let id = item.getAttribute('id');
    inProgress = inProgress.concat(done.splice(findElementById(done, id), 1));

    saveInProgress(inProgress);
    saveDone(done);
    $DONE_CARD_COUNTER_OUT.innerHTML = makeToDo.length;
    $INPROGRESS_CARD_COUNTER_OUT.innerHTML = inProgress.length;
    $INPROGRESS_CARD_LIST.innerHTML += createInProgress(
      inProgress[findElementById(inProgress, id)]
    );
    window.location.reload();
  });
});
$DONE_CARD_LIST_INPROGRESS_BTN_ALL.forEach((item) => {
  item.addEventListener('click', removeDone);
});

//  16-Нажатие кнопки создания таска
$CREATER_PANEL_CREATE_BTN.addEventListener('click', (e) => {
  // отключение перезагрузки страницы по клику
  e.preventDefault();

  //создаем объект из инпутов
  let task = new GetData(
    $CREATER_PANEL_TITLE.value,
    $CREATER_PANEL_DESCRIPTION.value,
    $CREATER_PANEL_AUTHOR.value
  );
  $TASKS_CARD_LIST.innerHTML += createMakeToDo(task);
  // добавление объекта в массив
  makeToDo.push(task);
  makeToDo.forEach(function (item, index) {
    $TASKS_CARD_COUNTER_OUT.innerHTML = index + 1;
  });

  // сохранение записи из localStorage
  saveMakeToDo(makeToDo);

  //очищаем инпуты
  clearValue($CREATER_PANEL_TITLE);
  clearValue($CREATER_PANEL_DESCRIPTION);
  clearValue($CREATER_PANEL_AUTHOR);
  isDisabled();
});
