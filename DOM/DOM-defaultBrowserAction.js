Поймайте переход по ссылке
// важность: 5
// Сделайте так, чтобы при клике на ссылки внутри элемента #contents пользователю выводился вопрос о том, 
// действительно ли он хочет покинуть страницу и если он не хочет, то прерывать переход по ссылке.

// Так это должно работать:


// Детали:

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все 
// ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может содержать вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.


// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         #contents {
//             padding: 5px;
//             border: 1px green solid;
//         }
//     </style>
// </head>

// <body>

//     <fieldset id="contents">
//         <legend>#contents</legend>
//         <p>
//             Как насчет почитать <a href="http://wikipedia.org">Википедию</a>, или посетить <a href="http://w3.org"><i>W3.org</i></a> и узнать про современные стандарты?
//         </p>
//     </fieldset>
//     <script>
document.addEventListener('click', confirmation);

function confirmation(event) {
    var target = event.target;

    if (target.tagName == 'A' || target.parentNode.tagName == 'A') {

        var agriment = confirm('Do you really want to visit ' + target.innerHTML + '?');
        if (!agriment) {
            event.preventDefault();
        };
    }
}
//     </script>
// </body>

// </html>
-- -- -- -- -- -- -- -- -- --

Галерея изображений
// важность: 5
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

// Для обработки событий используйте делегирование, т.е.не более одного обработчика.

// P.S.Обратите внимание– клик может быть как на маленьком изображении IMG, так и на A вне него.При этом
// event.target будет, соответственно, либо IMG, либо A.

// Дополнительно:

//     Если получится– сделайте предзагрузку больших изображений, чтобы при клике они появлялись сразу.
// Всё ли в порядке с семантической вёрсткой в HTML исходного документа ? Если нет– поправьте, чтобы было,
//     как нужно.

// <!DOCTYPE HTML>
// <html>

// <head>
//     <title>Галерея</title>
//     <meta charset="utf-8">
//     <style>
//         body {
//             margin: 0;
//             padding: 0;
//             font: 75%/120% Arial, Helvetica, sans-serif;
//         }

//         h2 {
//             font: bold 190%/100% Arial, Helvetica, sans-serif;
//             margin: 0 0 .2em;
//         }

//         h2 em {
//             font: normal 80%/100% Arial, Helvetica, sans-serif;
//             color: #999999;
//         }

//         #largeImg {
//             border: solid 1px #ccc;
//             width: 550px;
//             height: 400px;
//             padding: 5px;
//         }

//         #thumbs a {
//             border: solid 1px #ccc;
//             width: 100px;
//             height: 100px;
//             padding: 3px;
//             margin: 2px;
//             float: left;
//         }

//         #thumbs a:hover {
//             border-color: #FF9900;
//         }
//     </style>
// </head>

// <body>

//     <p><img id="largeImg" src="https://js.cx/gallery/img1-lg.jpg" alt="Large image"></p>


//     <div id="thumbs">
//         <!-- При наведении на изображение показывается встроенная подсказка браузера (title) -->
//         <a href="https://js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://js.cx/gallery/img2-thumb.jpg"></a>
//         <a href="https://js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://js.cx/gallery/img3-thumb.jpg"></a>
//         <a href="https://js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://js.cx/gallery/img4-thumb.jpg"></a>
//         <a href="https://js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://js.cx/gallery/img5-thumb.jpg"></a>
//         <a href="https://js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://js.cx/gallery/img6-thumb.jpg"></a>
//     </div>



//     <script>
var thumbs = document.getElementById('thumbs');
thumbs.addEventListener('click', commit);

function commit(event) {
    var target = event.target;
    var largeImg = document.getElementById('largeImg');
    if (target.nodeName == "IMG") {
        largeImg.alt = target.parentNode.alt;
        largeImg.src = target.parentNode.href;
    }
    event.preventDefault();
}

//передзагрузка - взята з розвязку
var imgs = thumbs.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    var url = imgs[i].parentNode.href;
    var img = document.createElement('img');
    img.src = url;
}
//     </script>

// </body>

// </html>