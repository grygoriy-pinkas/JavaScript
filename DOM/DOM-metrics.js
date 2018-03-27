Найти размер прокрутки снизу
// важность: 5
// Свойство elem.scrollTop содержит размер прокрученной области при отсчете сверху. А как подсчитать размер 
// прокрутки снизу?

// Напишите соответствующее выражение для произвольного элемента elem.

// Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать ноль.


var scrollBottom = elem.scrollHeight - elem.clientHeight - scrollTop;
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Узнать ширину полосы прокрутки
// важность: 3
// Напишите код, который возвращает ширину стандартной полосы прокрутки. Именно самой полосы, где ползунок. 
// Обычно она равна 16px, в редких и мобильных браузерах может колебаться от 14px до 18px, а кое-где даже равна 0px.

// P.S. Ваш код должен работать на любом HTML-документе, независимо от его содержимого.

var scroll = elem.offsetWidth - elem.clientWidth - border;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Подменить div на другой с таким же размером
// важность: 3
// Посмотрим следующий случай из жизни. Был текст, который, в частности, содержал div с зелеными границами:

//  <style>
//   #moving-div {
//     border: 5px groove green;
//     padding: 5px;
//     margin: 10px;
//     background-color: yellow;
//   }
// </style>

// Before Before Before

// <div id="moving-div">
// Text Text Text<br>
// Text Text Text<br>
// </div>

// After After After
// Программист Валера из вашей команды написал код, который позиционирует его абсолютно и смещает в правый 
// верхний угол. Вот этот код:

// var div = document.getElementById('moving-div');
// div.style.position = 'absolute';
// div.style.right = div.style.top = 0;
// Побочным результатом явилось смещение текста, который раньше шел после DIV. Теперь он поднялся вверх:


// Допишите код Валеры, сделав так, чтобы текст оставался на своем месте после того, как DIV будет смещен.

// Сделайте это путем создания вспомогательного DIV с теми же width, height, border, margin, padding, что и 
// у желтого DIV.

// Используйте только JavaScript, без CSS.

// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         #moving-div {
//             border: 5px groove green;
//             padding: 5px;
//             margin: 10px;
//             background-color: yellow;
//         }
//     </style>
// </head>

// <body>

//     Before Before Before

//     <div id="moving-div">
//         Text Text Text<br> Text Text Text<br>
//     </div>

//     After After After

//     <script>

//якось так(метриками тут і не пахне)
var div = document.getElementById('moving-div');

var div2 = div.cloneNode(false);
div2.id = "new";
//console.log(div2.style);

//це позиціонування не зовсім зрозуміле(я тут вгадав), оскільки там ще є текстові вузли, а
//firstElementChild - відноситься не до childNodes а до children???
document.body.insertBefore(div2, document.body.firstElementChild);

div2.style = getComputedStyle(div, '');


div2.style.backgroundColor = "grey";
div2.style.height = "30px";


div.style.position = 'absolute';
div.style.right = div.style.top = 0;
//     </script>

// </body>

// </html>

-- -- -- -- -- -- -- -- -- -- -- --

Поместите мяч в центр поля
// важность: 5
// Поместите мяч в центр поля.

// Менять CSS нельзя, мяч должен переносить в центр ваш скрипт, через установку нужных стилей элемента.
// JavaScript-код должен работать при разных размерах мяча (10, 20, 30 пикселей) без изменений.
// JavaScript-код должен работать при различных размерах и местоположениях поля на странице без изменений. 
// Также он не должен зависеть от ширины рамки поля border.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут
//  другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода 
//«разминка».


// <!DOCTYPE HTML>
// <html>

// <head>
//     <style>
//         #field {
//             width: 200px;
//             border: 10px groove black;
//             background-color: #00FF00;
//             position: relative;
//         }

//         #ball {
//             position: absolute;
//         }
//     </style>
// </head>

// <body>


//     <div id="field">
//         <img src="https://js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//         . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//     </div>
//     <script>
var field = document.getElementById('field');
var ball = document.getElementById('ball');
var ballRadius = ball.clientWidth / 2;

var fieldCentreWidth = field.clientWidth / 2 - ballRadius;
var fieldCentreHeight = field.clientHeight / 2 - ballRadius;

ball.style.left = fieldCentreWidth + 'px';
ball.style.top = fieldCentreHeight + 'px';

//     </script>

// </body>

// </html>

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Расширить элемент
// важность: 4
// В < body > есть элемент < div > с заданной шириной width.

// Задача– написать код, который« распахнет» < div > по ширине на всю страницу.

// Исходный документ( < div > содержит текст и прокрутку):


//     P.S.Пользоваться следует исключительно средствами JS, CSS в этой задаче менять нельзя.Также ваш код должен
// быть универсален и не ломаться, если цифры в CSS станут другими.

// P.P.S.При расширении элемент < div > не должен вылезти за границу < body > 

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         #elem {
//             width: 200px;
//             height: 150px;
//             background-color: red;
//             padding: 20px;
//             overflow: auto;
//         }

//         body {
//             border: 1px solid black;
//         }
//     </style>
// </head>

// <body>

//     <div id="elem">
//         текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
//         текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
//         текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
//         текст текст текст текст
//     </div>

//     <script>
function minusPX(value) {
    //var value = '' + value;
    var element = document.getElementById("elem");
    let [elem, prop] = value.split('.');
    let preRes = parseInt(getComputedStyle(element)[prop]);
    console.log(preRes);

    return preRes;
}
var elem = document.getElementById("elem");
var scroll = elem.offsetWidth - elem.clientWidth;

var body = document.body;
var bodyWidth = body.offsetWidth

var border = parseInt(getComputedStyle(document.body).border);

var newContentWidth = bodyWidth - minusPX('elem.paddingLeft') - minusPX('elem.paddingRight') -
    2 * border;

elem.style.width = newContentWidth + 'px';

//         </script>


// </body>

// </html>