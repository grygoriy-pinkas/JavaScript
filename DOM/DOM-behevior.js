Поведение "подсказка"
    // важность: 5
    // При наведении мыши на элемент, на нём возникает событие mouseover, при удалении мыши с элемента – 
    // \событие mouseout.

// Зная это, напишите JS-код, который будет делать так, что при наведении на элемент, если у него есть 
// атрибут data-tooltip – над ним будет показываться подсказка с содержимым этого атрибута.

// В этой задаче можно полагать, что в элементе с атрибутом data-tooltip – только текст, то есть нет подэлементов.

// Детали оформления:

// Подсказка должна появляться при наведении на элемент, по центру и на небольшом расстоянии сверху. При уходе 
// курсора с элемента – исчезать.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Оформление подсказки должно задаваться CSS.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена. Если нельзя 
// показать сверху – показывать снизу элемента.
// Важно: нужно использовать приём разработки «поведение», то есть поставить обработчик (точнее два) на document, 
// а не на каждый элемент.

// Плюс этого подхода – динамически добавленные в DOM позже элементы автоматически получат этот функционал.

// <!DOCTYPE HTML>
// <html>

// <head>
//     <meta charset="utf-8">
//     <style>
//         body {
//             height: 2000px;
//             background-color: aliceblue;
//             /* подсказка должна работать независимо от прокрутки */
//         }
//         /* ваши стили */
//     </style>
// </head>

// <body>

//     <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>
//     <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>

//     <button data-tooltip="подсказка длиннее, чем элемент">Короткая кнопка</button>
//     <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

//     <p>Прокрутите страницу, чтобы ссылки были вверху и проверьте, правильно ли показываются подсказки.</p>


//     <script>
document.addEventListener('mouseover', showMessage);
document.addEventListener('mouseout', hideMessage);

//там мабуть через css треба поставити стилі, але ялишній раз попрактикувався в яві 
var div = document.createElement('div');
document.body.appendChild(div);
div.style = `border: 1px solid black;
        border-radius: 4px;
        width: auto;
        height: 35px;
        padding: 10px;
        display: none;
        position: absolute;
        background-color: azure;
        `


function showMessage() {
    var target = event.target;
    var message = target.getAttribute('data-tooltip');
    if (!message) return;
    div.style.display = 'block';
    var map = target.getBoundingClientRect();

    if (map.top < 60) {
        div.style.top = map.top + 75 + 'px';
    } else {
        div.style.top = map.top - 60 + 'px';
    }
    div.style.left = map.left + 'px';
    div.innerHTML = message;
}

function hideMessage() {
    var target = event.target;
    var message = target.getAttribute('data-tooltip');
    if (!message) return;
    div.style.display = 'none';
}
//     </script>

// </body>

// </html>