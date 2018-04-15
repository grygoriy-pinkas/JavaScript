// Валидация формы
// важность: 3
// Напишите функцию validate(form), которая проверяет содержимое формы по клику на кнопку« Проверить».

// Ошибки:

//     Одно из полей не заполнено.
// Пароли не совпадают.
// Ошибка должна сопровождаться сообщением у поля.


var form = document.forms[0];
var error;

form.onsubmit = function() {
    validate(form);
}

function validate(form) {
    let pass1 = document.getElementsByName('password')[0];
    let pass2 = document.getElementsByName('password2')[0];
    let from = document.getElementsByName('from')[0];
    let to = document.getElementsByName('to')[0];
    let message = document.getElementsByName('message')[0];

    if (pass1.value == '') {
        showError(pass1, 'Enter password');
    } else {
        hideError(pass1);
    }
    if (pass1.value != pass2.value) {
        showError(pass2, 'Passwords not equal');
    } else {
        // hideError(pass2);
    }
    if (from.value == '') {
        showError(from, 'Who send?');
    } else {
        hideError(from);
    }
    if (to.selectedIndex == 0) {
        showError(to, 'Wher?');
    } else {
        hideError(to);
    }
    if (message.value == '') {
        showError(message, 'Create text', "(coord.bottom - 5) + 'px'", "(coord.left) + 'px'");
    } else {
        hideError(message);
    }
}


function showError(node, pronounce, some1, some2) {
    let coord = node.getBoundingClientRect();
    error = document.createElement('div');
    document.body.appendChild(error);
    error.setAttribute('data-name', node.name)
        //console.log(node.name);
    error.classList.add("error");
    //взяв до уваги класну фішку OR. тепер буду її використовувати) 
    error.style.top = some1 || (coord.top - 5) + 'px';
    error.style.left = some2 || (coord.right - 5) + 'px';
    error.innerHTML = pronounce;
}

function hideError(node) {
    var errors = document.getElementsByTagName('div');
    console.log(node);
    for (let i = 0; i < errors.length; i++) {
        console.log(errors[i].getAttribute('data-name'));
        console.log('--------------');
        if (errors[i].getAttribute('data-name') == node.name) {
            document.body.removeChild(errors[i]);
        }
    }
}