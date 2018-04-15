// Мышонок на "клавиатурном" приводе
// важность: 4
// Кликните по мышонку. Затем нажимайте клавиши со стрелками, и он будет двигаться.

// Демо в новом окне

// В этой задаче запрещается ставить обработчики куда-либо, кроме элемента #mouse.

// Можно изменять атрибуты и классы в HTML.

console.log(mouse);


var check;

mouse.onfocus = function() {
    mouse.style.position = 'fixed';
    check = true;
}

mouse.onblur = function() {
    mouse.style.position = "";
    check = false;
}

document.onkeydown = function(event) {
    var position = mouse.getBoundingClientRect();
    var direction = event.keyCode;
    if (check) {
        switch (direction) {
            case 37:
                mouse.style.left = (position.left - 45) + 'px';
                break;
            case 38:
                mouse.style.top = (position.top - 55) + 'px';
                break;
            case 39:
                mouse.style.left = (position.left + 45) + 'px';
                break;
            case 40:
                mouse.style.top = (position.top + 55) + 'px';
        }
    }
}