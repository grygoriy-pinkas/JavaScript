// Редактирование TD по клику
// важность: 5
// Сделать ячейки таблицы td редактируемыми по клику.

// При клике – ячейка <td> превращается в редактируемую, можно менять HTML. Размеры ячеек 
// при этом не должны меняться.
// В один момент может редактироваться одна ячейка.
// При редактировании под ячейкой появляются кнопки для приема и отмены редактирования, 
// только клик на них заканчивает редактирование.

var table = document.getElementById('bagua-table');
var check = false;


table.onclick = function(e) {

    //запобігання вибору кількох клітинок
    if (check) {
        return;
    }

    var target = e.target;

    if (target.tagName == 'TABLE' || target.tagName == 'TH') {
        return;
    }

    check = true;

    if (target.tagName == 'STRONG') {
        target = target.parentNode;
    }
    let coordinates = target.getBoundingClientRect();
    target.style.display = 'none';
    forma.style.display = 'block';
    forma.style.top = coordinates.top + 'px';
    forma.style.left = coordinates.left + 'px';
    text.style.height = (coordinates.height - 4) + 'px';
    buttons.style.top = coordinates.height + 'px';
    //проблема з текстом в середині поля. не можу настроїти для повного відображення
    text.value = target.innerHTML;
    ok.onclick = function(e) {
        target.style.display = '';
        forma.style.display = 'none';
        target.innerHTML = text.value;
        check = false;
    }
    cencel.onclick = function(e) {
        target.style.display = '';
        forma.style.display = 'none';
        check = false;
    }

    return false;
}

//так як вчимо фокуси то маємо застосовувати фокус. але він не вспливає тому треба
//ловити на перехваті. але тут шось не клеїться і в принципі тим шляхом, 
//яким я пішов недоцільно вирішувати дану задачу. а все ж)
//має ж якось фокус сюди відноситись

// var table = document.getElementById('bagua-table');
// var check = false;

// var aim = document;

// table.onclick = function(e) {
//     aim = e.target;
//     console.log(aim);
// }

// aim.addEventListener("focus", function(e) {
//     if (check) {
//         return;
//     }
//     check = true;

//     var target = aim;
//     console.log(target);
//     if (target.tagName == 'TABLE') {
//         return;
//     }
//     if (target.tagName == 'STRONG') {
//         target = target.parentNode;
//     }
//     let coordinates = target.getBoundingClientRect();
//     target.style.display = 'none';
//     forma.style.display = 'block';
//     forma.style.top = coordinates.top + 'px';
//     forma.style.left = coordinates.left + 'px';
//     text.style.height = (coordinates.height - 4) + 'px';
//     buttons.style.top = coordinates.height + 'px';
//     //проблема з текстом в середині поля. не можу настроїти для повного відображення
//     text.value = target.innerHTML;
//     ok.onclick = function(e) {
//         target.style.display = '';
//         forma.style.display = 'none';
//         target.innerHTML = text.value;
//         check = false;
//     }
//     cencel.onclick = function(e) {
//         target.style.display = '';
//         forma.style.display = 'none';
//         check = false;
//     }

// }, true);