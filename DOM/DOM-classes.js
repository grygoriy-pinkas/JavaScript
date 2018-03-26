Скругленая кнопка со стилями из JavaScript
// важность: 3
// Создайте кнопку в виде элемента <a> с заданным стилем, используя JavaScript.

// В примере ниже такая кнопка создана при помощи HTML/CSS. В вашем решении кнопка должна создаваться, 
// настраиваться и добавляться в документ при помощи только JavaScript, без тегов <style> и <a>.
// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
// </head>

// <body>


{
    /* <a class="button" href="/">Нажми меня</a>
        
    <script> */
}


button.style.cssText = `-moz-border-radius: 8px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px groove green;
      display: block;
      height: 30px;
      line-height: 30px;
      width: 100px;
      text-decoration: none;
      text-align: center;
      color: red;
      font-weight: bold;`;


//     </script>

// </body>

// </html>

-- -- -- -- -- -- -- -- -- -- -- -- -

Создать уведомление
// важность: 5
// Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.

// Описание функции:

// /**
//  * Показывает уведомление, пропадающее через 1.5 сек
//  *
//  * @param options.top {number} вертикальный отступ, в px
//  * @param options.right {number} правый отступ, в px
//  * @param options.cssText {string} строка стиля
//  * @param options.className {string} CSS-класс
//  * @param options.html {string} HTML-текст для показа
//  */
// function showNotification(options) {
//   // ваш код
// }
// Пример использования:

// // покажет элемент с текстом "Привет" и классом welcome справа-сверху окна
// showNotification({
//   top: 10,
//   right: 10,
//   html: "Привет",
//   className: "welcome"
// });
// Демо в новом окне

// Элемент уведомления должен иметь CSS-класс notification, к которому добавляется класс из options.className, 
// если есть. Исходный документ содержит готовые стили.
// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         .welcome {
//             border: 3px solid red;
//             margin: 3px;
//             width: 80px;
//             text-align: center;
//             display: inline;
//         }
//     </style>
// </head>

// <body>

//     <script>
//я зробив інакше ніж в розвязку. в мене не створюється кожен раз елемент а тільки міняється властивість css
//просто тут вийшло не зовсім асинхронно. мабуть проміси тут можна застосувати.
var i = 0;

function showNotification(options) {
    var div = document.createElement('div');
    var row = document.createElement('p');

    row.className = options.className;
    document.body.appendChild(div);
    div.appendChild(row);

    let css = parceCss(options);
    row.style.cssText = css;
    row.innerHTML = options.html;

    row.style.display = "";

    console.log(i++);


    setTimeout(() => {
        console.log("close");
        row.style.display = "none";
    }, 1500);
}


// showNotification({
//     top: 10,
//     right: 10,
//     html: "Привет",
//     className: "welcome"
// });

function parceCss(options) {
    var cssText = '"';
    var unit = "";
    for (value in options) {
        if (value != 'html' || 'className') {
            if (typeof options[value] == "number") {

                unit = "px";
            }
            unit = "";

            cssText += value + ": " + options[value] + unit + ";" + "\\";
        }
    }
    cssText += '"';
    return cssText;
}

//нерозумію чому цей інтервал не запускається періодично
setInterval(showNotification({
    top: 10,
    right: 10,
    html: "Привет",
    className: "welcome"
}), 2000);
//     </script>

// </body>

// </html>