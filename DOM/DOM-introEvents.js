Спрятать при клике
// важность: 5
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
// </head>

// <body>

//     <input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />

//     <div id="text">Текст</div>

//     <script>
var text = document.getElementById('text');
var button = document.getElementById('hider');

button.addEventListener('click', () => {
        text.innerHTML = ''
    })
    //     </script>
    // </body>

// </html>

-- -- -- -- -- -- -- -- -- -- -- -- -

Спрятаться
// важность: 5
// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
// </head>

// <body>

//     <input type="button" id="hider" value="Нажмите, чтобы спрятать себя" />


//     <script>
var button = document.getElementById('hider');

button.addEventListener('click', () => {
        button.style.display = 'none';
    })
    //     </script>
    // </body>

// </html>

-- -- -- -- -- -- -- -- -- -- --

Спрятать сообщение
// важность: 5
// Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.
//P.S. Как лучше отобразить кнопку справа-сверху: через position:absolute или float:right? Почему?

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
//         }

//         .remove-button {
//             font-size: 110%;
//             color: darkred;
//             right: 10px;
//             width: 24px;
//             height: 24px;
//             border: none;
//             background: transparent;
//         }
//     </style>
// </head>

// <body>

//     Кнопка для удаления:
//     <button class="remove-button">[x]</button>

//     <div>
//         <div class="pane">
//             <h3>Лошадь</h3>
//             <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
//         </div>
//         <div class="pane">
//             <h3>Осёл</h3>
//             <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
//         </div>
//         <div class="pane">
//             <h3>Корова, а также пара слов о диком быке, о волах и о тёлках. </h3>
//             <p>Коро́ва — самка домашнего быка, одомашненного подвида дикого быка, парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами, кастрированные самцы — волами. Молодых (до первой стельности) самок
//                 называют тёлками.
//             </p>
//         </div>
//     </div>
// <script>
var button = document.getElementsByClassName('remove-button')[0];
var arr = document.getElementsByClassName('pane');
console.log(typeof button);

[].forEach.call(arr, function(item) {
    var a = item.getBoundingClientRect();

    // let but = {};
    // Object.assign(but, button);
    //це нормально я зробив, чи є кращі способи. мучився трохи з цим
    item.insertAdjacentHTML("afterBegin", button.outerHTML);
    let but = item.children[0];
    //хотыв також батькам назначити абсолют, щоб позиціонувати відносно батьків, але ламається
    //верстка. при такому підході верстка непрофесійна для даного випадку? 
    //є якийсь вихід не призначаючи абсолют батькам. 
    //чи хрестик буде рухатись з родичем, бо розраховується відносно його координат????
    but.style.position = 'absolute';
    but.style.top = (a.top + 11) + 'px';
    but.style.left = (a.right - 31) + 'px';

});
//     </script>

// </body>

// </html>