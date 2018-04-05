// Расставить супергероев по полю
// важность: 5
// В этой задаче вы можете проверить своё понимание сразу нескольких аспектов Drag’n’Drop.

// Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. По окончании 
// переноса элемент остаётся на том месте в документе, где его положили.

// Требования к реализации:

// Должен быть 1 обработчик на document, использующий делегирование.
// Если элементы подносят к вертикальным краям окна – оно должно прокручиваться вниз/вверх.
// Горизонтальной прокрутки в этой задаче не существует.
// Элемент при переносе, даже при резких движениях мышкой, не должен попасть вне окна.
// Футбольное поле в этой задаче слишком большое, чтобы показывать его здесь, поэтому откройте его, 
// кликнув по ссылке ниже. Там же и подробное описание задачи (осторожно, винни-пух и супергерои!).



//тут мабуть найважливіше це архітектура скрипта
document.onmousedown = function(e) {
    //визначаємо елемент
    var dragElement = e.target;
    //тут не зовсім зхрозуміло. переглянув contains, але вона застосована несподіваним способом для мене
    //і для несподіваних речей. хоча якщо вернутись назад то цей спосіб був описаний
    if (!dragElement.classList.contains('draggable')) return;

    var coords, shiftX, shiftY;

    startDrag(e.clientX, e.clientY);
    //я пробував застосовувати addEventListener
    document.onmousemove = function(e) {
        moveAt(e.clientX, e.clientY);
    };

    dragElement.onmouseup = function() {
        finishDrag();
    };


    // -------------------------

    function startDrag(clientX, clientY) {
        //вираховуємо відстань між точкою захвату елементу і його краєм
        shiftX = clientX - dragElement.getBoundingClientRect().left;
        shiftY = clientY - dragElement.getBoundingClientRect().top;
        //міняємо на фіксоване позиціонування
        dragElement.style.position = 'fixed';
        //тут нерозумію дял чого ставити. коли пробував вирішити задачку і підглянув та застосував
        //це то воно взагалі ламало все
        document.body.appendChild(dragElement);

        moveAt(clientX, clientY);
    };

    function finishDrag() {
        // конец переноса, перейти от fixed к absolute-координатам
        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';

        document.onmousemove = null;
        //тут теж несподівано призначається нуль самому собі
        dragElement.onmouseup = null;
    }

    function moveAt(clientX, clientY) {
        // новые координаты
        var newX = clientX - shiftX;
        var newY = clientY - shiftY;
        //нижче прокоментовано

        // ------- обработаем вынос за нижнюю границу окна ------
        // новая нижняя граница элемента
        var newBottom = newY + dragElement.offsetHeight;

        // если новая нижняя граница вылезает вовне окна - проскроллим его
        if (newBottom > document.documentElement.clientHeight) {
            // координата нижней границы документа относительно окна
            var docBottom = document.documentElement.getBoundingClientRect().bottom;

            // scrollBy, если его не ограничить - может заскроллить за текущую границу документа
            // обычно скроллим на 10px
            // но если расстояние от newBottom до docBottom меньше, то меньше
            var scrollY = Math.min(docBottom - newBottom, 10);

            // ошибки округления при полностью прокрученной странице
            // могут привести к отрицательному scrollY, что будет означать прокрутку вверх
            // поправим эту ошибку
            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, scrollY);

            // резким движением мыши элемент можно сдвинуть сильно вниз
            // если он вышел за нижнюю границу документа -
            // передвигаем на максимально возможную нижнюю позицию внутри документа
            newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
        }


        // ------- обработаем вынос за верхнюю границу окна ------
        if (newY < 0) {
            // проскроллим вверх на 10px, либо меньше, если мы и так в самом верху
            var scrollY = Math.min(-newY, 10);
            if (scrollY < 0) scrollY = 0; // поправим ошибку округления

            window.scrollBy(0, -scrollY);
            // при резком движении мыши элемент мог "вылететь" сильно вверх, поправим его
            newY = Math.max(newY, 0);
        }


        // зажать в границах экрана по горизонтали
        // здесь прокрутки нет, всё просто
        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
            newX = document.documentElement.clientWidth - dragElement.offsetHeight;
        }

        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
    }

    // отменим действие по умолчанию на mousedown (выделение текста, оно лишнее)
    return false;
}