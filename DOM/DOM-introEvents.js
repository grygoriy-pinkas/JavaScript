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

//button.addEventListener('click', () => {
//      text.innerHTML = ''
//   });

button.addEventListener('click', () => {
    text.style.display = 'none';
});
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
//old variant
var button = document.getElementById('hider');

button.addEventListener('click', () => {
    button.style.display = 'none';
})

//first new variant
function hider(elem) {
    var element = document.getElementById(elem);
    //спочатку тут використовував стрілочну функцію. не міг вивести thisю а потім ЗГАДАВ що вони не мають
    //контексту свого)
    element.addEventListener('click', function() {
        this.style.display = 'none';
    })
}
hider('hider');

//second new variant
var button = document.getElementById('hider');

button.onclick = function() {
        this.style.display = 'none';
    }
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

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Карусель
// важность: 4
// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// В дальнейшем к ней можно легко добавить анимацию, динамическую подгрузку и другие возможности.

// P.S. В этой задаче разработка HTML/CSS-структуры сос тавляет 90% решения.

// <!DOCTYPE html>

// <head>
//     <meta charset="utf-8">

//     <style>
//         body {
//             padding: 10px;
//         }

//         .carousel {
//             position: relative;
//             width: 398px;
//             padding: 10px 40px;
//             border: 1px solid #CCC;
//             border-radius: 15px;
//             background: #eee;
//         }

//         .carousel img {
//             width: 130px;
//             height: 130px;
//             /* по умолчанию inline, в ряде браузеров это даст лишнее пространство вокруг элементов */
//             display: block;
//         }

//         .arrow {
//             position: absolute;
//             top: 60px;
//             padding: 0;
//             background: #ddd;
//             border-radius: 15px;
//             border: 1px solid gray;
//             font-size: 24px;
//             line-height: 24px;
//             color: #444;
//             display: block;
//         }

//         .arrow:focus {
//             outline: none;
//         }

//         .arrow:hover {
//             background: #ccc;
//             cursor: pointer;
//         }

//         .prev {
//             left: 7px;
//         }

//         .next {
//             right: 7px;
//         }

//         .gallery {
//             width: 390px;
//             overflow: hidden;
//         }

//         .gallery ul {
//             height: 130px;
//             width: 9999px;
//             margin: 0;
//             padding: 0;
//             list-style: none;
//             transition: margin-left 250ms;
//             /* remove white-space between inline-block'ed li */
//             /* http://davidwalsh.name/remove-whitespace-inline-block */
//             font-size: 0;
//         }

//         .gallery li {
//             display: inline-block;
//         }
//     </style>
// </head>

// <body>

//     <div id="carousel" class="carousel">
//         <button class="arrow prev">⇦</button>
//         <div class="gallery">
//             <ul class="images">
//                 <li><img src="https://js.cx/carousel/1.png"></li>
//                 <li><img src="https://js.cx/carousel/2.png"></li>
//                 <li><img src="https://js.cx/carousel/3.png"></li>
//                 <li><img src="https://js.cx/carousel/4.png"></li>
//                 <li><img src="https://js.cx/carousel/5.png"></li>
//                 <li><img src="https://js.cx/carousel/6.png"></li>
//                 <li><img src="https://js.cx/carousel/7.png"></li>
//                 <li><img src="https://js.cx/carousel/8.png"></li>
//                 <li><img src="https://js.cx/carousel/9.png"></li>
//                 <li><img src="https://js.cx/carousel/10.png"></li>
//             </ul>
//         </div>
//         <button class="arrow next">⇨</button>
//     </div>



//     <script>
// этот код помечает картинки цифрами, для удобства разработки
// его можно убрать, если не нужен
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);


}
// </script>

// <script>
//це їхній код. розмітку зробив похожу, а от js були проблеми
var width = 130; // ширина изображения
var count = 3; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0)
        //тут 
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
//     </script>
// </body>

// </html>