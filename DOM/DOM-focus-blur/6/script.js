// Поле, предупреждающее о включенном CapsLock
// важность: 3
// Создайте поле, которое будет предупреждать пользователя, если включен CapsLock. 
// Выключение CapsLock уберёт предупреждение.

// Такое поле может помочь избежать ошибок при вводе пароля.
// var check = false;
var capsLockEnabled = null;

document.onkeypress = function(e) {

    var chr = getChar(e);
    if (!chr) return;

    if (chr.toLowerCase() == chr.toUpperCase()) {
        return;
    }

    capsLockEnabled = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
}

input.onkeyup = function() {
    console.log(capsLockEnabled);
    if (capsLockEnabled) {
        capsIndicator.style.display = 'block';
    } else {
        capsIndicator.style.display = 'none';
    }
}

input.onblur = function() {
    capsIndicator.style.display = 'none';
}

function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}