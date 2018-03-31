Передвигать мяч по полю
// важность: 5
// Сделайте так, что при клике по полю мяч перемещался на место клика.
// Требования:

// Мяч после перелёта должен становиться центром ровно под курсор мыши, если это возможно без вылета за край поля.
// CSS-анимация не обязательна, но желательна.
// Мяч должен останавливаться у границ поля, ни в коем случае не вылетать за них.
// При прокрутке страницы с полем ничего не должно ломаться.
// Замечания:

// Код не должен зависеть от конкретных размеров мяча и поля.
// Вам пригодятся свойства event.clientX/event.clientY

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         #field {
//             width: 200px;
//             height: 150px;
//             border: 10px groove black;
//             background-color: #00FF00;
//             position: relative;
//             overflow: hidden;
//         }

//         #ball {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             margin-left: -20px;
//             margin-top: -20px;
//             transition: 0.5s ease-out 0.2s;
//         }
//     </style>
// </head>

// <body style="height:2000px">

//     Кликните на любое место поля, чтобы мяч перелетел туда.
//     <br> Мяч никогда не вылетит за границы поля.


//     <div id="field">
//         <img src="https://js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//         . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//     </div>
//     <script>
var ball = document.getElementById('ball');
var field = document.getElementById('field');
var corX, corY;

var fieldStyle = getComputedStyle(field);

field.onclick = function(event) {
    //додав також бордер до розрахунків
    corX = event.clientX - ball.clientWidth / 2 - field.offsetLeft + field.clientTop;
    corY = event.clientY - ball.clientHeight / 2 - field.offsetTop + field.clientLeft;
    console.log(ball.clientHeight);

    if (corX > parseInt(fieldStyle.width) - ball.clientWidth / 2) {
        corX = parseInt(fieldStyle.width) - ball.clientWidth / 2;
    }
    if (corY > parseInt(fieldStyle.height) - ball.clientHeight / 2) {
        corY = parseInt(fieldStyle.height) - ball.clientHeight / 2;
    }
    if (corX < 20) {
        corX = 20;
    }
    if (corY < 20) {
        corY = 20;
    }

    ball.style.top = corY + 'px';
    ball.style.left = corX + 'px';

};
//     </script>

// </body>

// </html>