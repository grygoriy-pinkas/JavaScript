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


if (document.documentElement.remove === undefined) { // (1)

    Element.prototype.remove = function remove() {
        let parent = this.parentNode;

        if (parent) {
            parent.removeChild(this);
        }
        return this;
    }
}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

// {/* <div>Это</div>
// <div>Элементы</div> */}

// <script>
//тут ти пропустив задачку. по ній є ще питання нижче
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
// Синтаксис:


var container = document.getElementById('tree');

function tree(container, data) {

    var indent = ' ';
    var ul = document.createElement('ul');
    container.appendChild(ul);

    for (let value in data) {

        let li = document.createElement('li');
        li.textContent = indent + value;
        ul.appendChild(li);

        if (Object.keys(data).length != 0) {
            container = li;
            tree(container, data[value]);
        }
    }
}

tree(container, data);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//я це зробив. проблема в тому що не розумію де виникають пусті ul. 
//єдине що приходить на думку - це ті що на початку функції. АЛЕ ВОНИ НА ПОЧАТКУ, тут треба твоєї допомоги
//також підскажи мені в загальних словах як має виглядати інший варіант з інер.
//по indent, то я запамятав цей трюк коли дивився уроки по laravel, там таке використовували)
// P.S. біда заставила користуватися отладчиком)))
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности – пустых <ul></ul> на нижнем уровне.

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Дерево
// важность: 5
// Есть дерево, организованное в виде вложенных списков <ul>/<li>.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы 
// нижнего уровня, без детей – пропускайте.

//подібне я вже робив. тут тільки підправити довелося.
var elem = document.body.getElementsByTagName('li');

for (let index = 0; index < elem.length; index++) {
    var count = elem[index].getElementsByTagName('li');
    if (count.length != 0) {
        elem[index].firstChild.textContent = elem[index].firstChild.textContent + '[' + count.length + ']';
    }
    console.log(count);
}

//варіант з розвязку(в них завжди коротше(()))
var lis = document.getElementsByTagName('li');

for (i = 0; i < lis.length; i++) {
    // получить количество детей
    var childCount = lis[i].getElementsByTagName('li').length;
    if (!childCount) continue;

    // добавить кол-во детей к текстовому узлу
    lis[i].firstChild.data += ' [' + childCount + ']';

}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Создать календарь в виде таблицы
// важность: 4
// Напишите функцию, которая умеет генерировать календарь для заданной пары(месяц, год).

// Календарь должен быть таблицей, где каждый день– это TD.У таблицы должен быть заголовок с названиями дней
// недели, каждый день– TH.

// Синтаксис: createCalendar(id, year, month).

// Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь
// элемента с указанным id.

// Например: createCalendar("cal", 2012, 9) сгенерирует в < div id = „cal“ > < /div> следующий календарь:

// P.S.Достаточно сгенерировать календарь, кликабельным его делать не нужно.

//<div id=„cal“></div>

//тут ще не дороблено. користувався підказками і овсім трішечки заглянув в код на початок
//Uncaught TypeError: Cannot set property 'innerHTML' of null - тут така помилочка. хоча в коді так само 
//зроблено


// <!DOCTYPE HTML>
// <html>

// <head>
//     <style>
//         table {
//             border-collapse: collapse;
//         }

//         td,
//         th {
//             border: 1px solid black;
//             padding: 3px;
//             text-align: center;
//         }

//         th {
//             font-weight: bold;
//             background-color: #E6E6E6;
//         }
//     </style>
//     <meta charset="utf-8">
// </head>

// <body>


//     <div id="calendar"></div>

//     <script>

//тут спочатку трохи робив, але задача складна, тому закінчував з їхнім кодом
function createCalendar(id, year, month) {
    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    var element = document.getElementById(id);
    let date = new Date(year, month - 1);
    // let day = date.getDay();
    let mon = month - 1;

    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }
    while (date.getMonth() == mon) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) {
            table += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);
    }
    if (getDay(date) != 0) {
        for (var i = getDay(date); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';

    element.innerHTML = table;
}

function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar("calendar", 2012, 9);
//     </script>
// </body>

// </html>

-- -- -- -- -- -- -- -- -- -- -- -- --


Часики с использованием "setInterval"
важность: 4

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         .red {
//             color: red;
//         }

//         .yellow {
//             color: yellow;
//         }

//         .green {
//             color: green;
//         }
//     </style>
// </head>

// <body>
//     <div id="clock">
//         <span class="red"></span>:<span class="yellow"></span>:<span class="green"></span>
//     </div>

//     <input type="button" onclick="clockStart()" value="Start">

//     <input type="button" onclick="clockStop()" value="Stop">



//     <script>
render = function() {
    var time = new Date();
    var h = time.getHours();
    if (h < 10) h = '0' + h;
    var m = time.getMinutes();
    if (m < 10) m = '0' + m;
    var s = time.getSeconds();
    if (s < 10) s = '0' + s;

    var element = document.getElementById('clock');
    element.children[0].innerHTML = h;
    element.children[1].innerHTML = m;
    element.children[2].innerHTML = s;

    //наступні два рядки для запитання. чому працює другий таймІнтервал. яким чином розпаковується масив. може я щось 
    //призабув
    var output = [h, m, s];
    return output;

}

var timerId;

function clockStart() {
    timerId = setInterval(render, 1000);

    setInterval(() => {
        test.textContent = render();
    }, 1000);
}

//зараз не працює бо є інший інтервал
function clockStop() {
    clearInterval(timerId);
    timerId = null;
}
//це теж до питання відноситься
var test = document.createElement('div');
document.body.appendChild(test);
//     </script>

// </body>

// </html>