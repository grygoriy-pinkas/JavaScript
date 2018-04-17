// Модальное диалоговое окно
// важность: 5
// Создайте функцию showPrompt(text, callback), которая выводит форму для ввода с сообщением 
// ext и кнопками ОК/Отмена.

// При отправке формы (OK/ввод в текстовом поле) – должна вызываться функция callback со 
// значением поля.
// При нажатии на Отмена или на клавишу Esc – должна вызываться функция callback(null).
// Клавиша Esc должна закрывать форму 
// всегда, даже если поле для ввода сообщения не в фокусе.
// Особенности реализации:

// Форма должна показываться в центре окна (и оставаться в центре при изменении его размеров,
//     также при прокрутке окна!).
// Текст может состоять из нескольких строк, возможен любой HTML
// При показе формы остальные элементы страницы использовать нельзя, не работают другие 
// кнопки и т.п, это окно – модальное.
// При показе формы – сразу фокус на INPUT для ввода.
// Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют 
// переключиться на другие элементы страницы.

// Исходный HTML/CSS для формы с готовым fixed-позиционированием – в песочнице.

//тут пробував писати, але виходили трохи нісенітниці. то розібрвся в коді який дали


function showCover() {
    var coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
}

function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
}


function showPrompt(text, callback) {
    showCover();
    var form = document.getElementById('prompt-form');
    var container = document.getElementById('prompt-form-container');
    document.getElementById('prompt-message').innerHTML = text;
    form.elements.text.value = '';

    function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
    }

    form.onsubmit = function() {
        var value = form.elements.text.value;
        if (value == '') return false; // игнорировать пустой submit

        complete(value);
        return false;
    };

    form.elements.cancel.onclick = function() {
        complete(null);
    };

    document.onkeydown = function(e) {
        if (e.keyCode == 27) { // escape
            complete(null);
        }
    };

    var lastElem = form.elements[form.elements.length - 1];
    var firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
        if (e.keyCode == 9 && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    };

    firstElem.onkeydown = function(e) {
        if (e.keyCode == 9 && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };


    container.style.display = 'block';
    form.elements.text.focus();
}

document.getElementById('show-button').onclick = function() {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert("Вы ввели: " + value);
    });
};