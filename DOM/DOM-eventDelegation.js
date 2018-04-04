Скрытие сообщения с помощью делегирования
// важность: 5
// Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.

// Используйте делегирование событий. Один обработчик для всего.

// В результате, должно работать вот так(кликните на крестик):

// <!DOCTYPE HTML>
// <html>

// <head>
//     <link rel="stylesheet" type="text/css" href="messages.css">
//     <meta charset="utf-8">
//     <style>
//         body {
//             margin: 10px auto;
//             width: 470px;
//         }

//         h3 {
//             margin: 0;
//             padding-bottom: .3em;
//             font-size: 1.1em;
//         }

//         p {
//             margin: 0;
//             padding: 0 0 .5em;
//         }

//         .pane {
//             background: #edf5e1;
//             padding: 10px 20px 10px;
//             border-top: solid 2px #c4df9b;
//             position: relative;
//         }

//         .remove-button {
//             font-size: 110%;
//             color: darkred;
//             right: 10px;
//             width: 24px;
//             height: 24px;
//             border: none;
//             background: transparent;
//             position: absolute;
//             top: 5px;
//             left: 440px;
//         }
//     </style>
// </head>

// <body>
//     <div id="shale">
//         <div class="pane">
//             <h3>Лошадь</h3>
//             <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
//             <button class="remove-button">[x]</button>
//         </div>
//         <div class="pane">
//             <h3>Осёл</h3>
//             <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
//             <button class="remove-button">[x]</button>
//         </div>
//         <div class="pane">
//             <h3>Корова, а также пара слов о диком быке, о волах и о тёлках. </h3>
//             <p>Коро́ва — самка домашнего быка, одомашненного подвида дикого быка, парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами, кастрированные самцы — волами. Молодых (до первой стельности) самок
//                 называют тёлками.
//             </p>
//             <button class="remove-button">[x]</button>
//         </div>
//     </div>
//     <script>
document.addEventListener('click', hide);

function hide(event) {
    var target = event.target.parentNode;
    while (target != this)
        if (target.className != 'pane') {
            target.remove();
        }
    target = target.parentNode;
}
//     </script>

// </body>

// </html>

-- -- -- -- -- -- --

Раскрывающееся дерево
// важность: 5
// Создайте дерево, которое по клику на заголовок скрывает-показывает детей:

// Требования:

// Использовать делегирование.
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.
// При наведении на заголовок – он становится жирным, реализовать через CSS.
// P.S. При необходимости HTML/CSS дерева можно изменить.
// <!DOCTYPE HTML>

// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         .tree span:hover {
//             font-weight: bold;
//         }
//     </style>
// </head>

// <body>

//     <ul class="tree">
//         <li>Животные
//             <ul>
//                 <li>Млекопитающие
//                     <ul>
//                         <li>Коровы</li>
//                         <li>Ослы</li>
//                         <li>Собаки</li>
//                         <li>Тигры</li>
//                     </ul>
//                 </li>
//                 <li>Другие
//                     <ul>
//                         <li>Змеи</li>
//                         <li>Птицы</li>
//                         <li>Ящерицы</li>
//                     </ul>
//                 </li>
//             </ul>
//         </li>
//         <li>Рыбы
//             <ul>
//                 <li>Аквариумные
//                     <ul>
//                         <li>Гуппи</li>
//                         <li>Скалярии</li>
//                     </ul>

//                 </li>
//                 <li>Морские
//                     <ul>
//                         <li>Морская форель</li>
//                     </ul>
//                 </li>
//             </ul>
//         </li>
//     </ul>

//     <script>
var container = document.getElementsByClassName('tree')[0];

//взяв їхній код для обгортання спамом
var treeUl = document.getElementsByTagName('ul')[0];

var treeLis = treeUl.getElementsByTagName('li');

for (var i = 0; i < treeLis.length; i++) {
    var li = treeLis[i];

    var span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);
}

console.log(container);

function hide(elem) {
    elem.onclick = function(e) {
        var gol = e.target;
        if (gol.tagName == 'SPAN') {
            var li = target.parentNode;
            var childrenContainer = li.getElementsByTagName('ul')[0];
            console.log(li);

            if (!childrenContainer) return;
            childrenContainer.hidden = !childrenContainer.hidden;
        }

    }
}

hide(container);
//     </script>

// </body>

// </html>
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Сортировка таблицы
// важность: 4
// Сделать сортировку таблицы при клике на заголовок.

// Требования:

// Использовать делегирование.
// Код не должен меняться при увеличении количества столбцов или строк.
// P.S. Обратите внимание, тип столбца задан атрибутом у заголовка. Это необходимо, ведь числа сортируются иначе 
// чем строки. Соответственно, код это может использовать.

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         th {
//             cursor: pointer;
//         }

//         th:hover {
//             background: yellow;
//         }
//     </style>
// </head>

// <body>

//     <table id="grid">
//         <thead>
//             <tr>
//                 <th data-type="number">Возраст</th>
//                 <th data-type="string">Имя</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>5</td>
//                 <td>Вася</td>
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>Петя</td>
//             </tr>
//             <tr>
//                 <td>12</td>
//                 <td>Женя</td>
//             </tr>
//             <tr>
//                 <td>9</td>
//                 <td>Маша</td>
//             </tr>
//             <tr>
//                 <td>1</td>
//                 <td>Илья</td>
//             </tr>
//         </tbody>
//     </table>

//     <script>
var table = document.getElementById('grid');

var col;
table.onclick = function(e) {
        let target = e.target;
        if (target.tagName != 'TH') {
            return;
        };
        let col = target.cellIndex;

        let elements = table.tBodies[0].children;
        let arr = [].slice.call(elements);

        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].remove();

        }

        arr.sort(function(a, b) {
            if (col == 0) {
                return a.children[col].innerHTML - b.children[col].innerHTML;
            } else {
                return a.children[col].innerHTML > b.children[col].innerHTML;
            }

        });

        arr.forEach(function(item, i) {
            table.tBodies[0].appendChild(item);
        })

        //перевірка правильності сортування масиву
        var array = [];
        arr.forEach(function(item) {
                array.push(item.children[col].innerHTML);
            })
            //console.log(array);
    }
    //     </script>

// </body>

// </html>