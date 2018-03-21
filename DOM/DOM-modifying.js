Добавление и удаление узлов

Удаление элементов
// важность: 5
// Напишите полифилл для метода remove для старых браузеров.

// Вызов elem.remove():

// Если у elem нет родителя – ничего не делает.
// Если есть – удаляет элемент из родителя.


// <div>Это</div>
// <div>Все</div>
// <div>Элементы DOM</div>

// <script>
//   /* ваш код полифилла */

//   var elem = document.body.children[0];

//   elem.remove(); // <-- вызов должен удалить элемент
// </script>


var result = parent.contains(child);


if (document.documentElement.remove() === undefined) { // (1)

    Element.prototype.remove(elem) = function {
        let parent = elem.parentNode;
        let result = parent.contains(elem);
        if (result) {
            parent.removeChild(elem);
        }
        return elem;
    }
}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

// {/* <div>Это</div>
// <div>Элементы</div> */}

// <script>
//працює другий варіант, перший чомусь ні
var elem = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
    var refElem = refElem;
    document.body.insertBefore(elem, refElem.nextSibling);
}

var body = document.body;

// вставить elem после первого элемента
insertAfter(elem, body.firstChild); // <--- должно работать

// вставить elem за последним элементом
insertAfter(elem, body.lastChild); // <--- должно работать
// </script>

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

removeChildren
важность: 5
Напишите функцию removeChildren, которая удаляет всех потомков элемента.

// <
// table id = "table" >
//     <
//     tr >
//     <
//     td > Это < /td> <
//     td > Все < /td> <
//     td > Элементы DOM < /td> <
//     /tr> <
//     /table>

// <ol id = "ol" >
//     <
//     li > Вася < /li> <
//     li > Петя < /li> <
//     li > Маша < /li> <
//     li > Даша < /li> <
//     /ol>

// <script >
function removeChildren(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
alert(ol.firstChild);

removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список
//</script>

-- -- -- -- -- -- -- -- -- -- -- -- -

Почему остаётся "ааа" ?
    // важность: 1
    // Запустите этот пример. Почему вызов removeChild не удалил текст "aaa"?

    //  <table>
    //   aaa
    //   <tr>
    //     <td>Test</td>
    //   </tr>
    // </table>

    // <script>
    var table = document.body.children[0];

alert(table); // таблица, пока всё правильно

document.body.removeChild(table);
// почему в документе остался текст?
// </script>
//подивився відповідь, але  незрозуміло в з отладчика де саме таблиця. ссилка на прінт скрін. дублюю в фб
https: //www.dropbox.com/s/6lbgftgw8w4vy9a/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202018-03-21%2018.16.42.png?dl=0

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    Создать список
    // важность: 4
    // Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к UL.
// Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если посетитель вводит теги – пусть в списке они показываются как обычный текст.

// <!DOCTYLE HTML>
// <html>

// <body>
//     <script>
var check = true;
var arr = [];
while (check) {
    let message = prompt('Enter row');
    if (message == null) {
        check = false;
    } else {
        arr.push(message);
    }
}

var ul = document.createElement('ul');
ul.textContent = 'Creating list';
document.body.appendChild(ul);
// ul.textContent('Creating list');


arr.forEach((item, i) => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    })
    //     </script>

// </body>

// </html>

-- -- -- -- -- -- -- -- -- --

Создайте дерево из объекта
// важность: 5
// Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.

// Например:

var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};
Синтаксис:



    var container = document.getElementById('tree');
var ul = document.createElement('ul');
container.appendChild(ul);


// var key = Object.keys(data);
//пропадає вложеність
// console.log(key);
// console.log(typeof key);
function tree(container, data) {
    //console.log(container);
    var indent = ' ';
    if (Object.keys(data).length != 0) {
        //console.log(Object.keys(data));
        var ul = document.createElement('ul');
        container.appendChild(ul);
    }
    for (let value in data) {

        let li = document.createElement('li');
        li.textContent = indent + value;
        ul.appendChild(li);
        console.log(data[value]);

        if (typeof data[value] == 'object') {
            tree(container, data[value]);
        }
    }
}

// var ul = document.createElement('ul');
// container.appendChild(ul);

tree(container, data);

// for (let value in data) {
//     console.log(value);
//     if (typeof data[value] == 'object') {
//         for (let key in data[value]) {
//             console.log(key);
//         }
//     }

// }
// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности – пустых <ul></ul> на нижнем уровне.