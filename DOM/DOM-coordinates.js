Найдите координаты точки в документе
// важность: 5
// В ифрейме ниже вы видите документ с зеленым «полем».

// При помощи JavaScript найдите координаты указанных стрелками углов относительно окна браузера.

// Для тестирования в документ добавлено удобство: клик в любом месте отображает координаты мыши относительно окна.

// Ваш код должен при помощи DOM получить четыре пары координат:

// Левый-верхний угол снаружи, это просто.
// Правый-нижний угол снаружи, это тоже просто.
// Левый-верхний угол внутри, это чуть сложнее.
// Правый-нижний угол внутри, это ещё сложнее, но можно сделать даже несколькими способами.
// Они должны совпадать с координатами, которые вы получите кликом по полю.

// P.S. Код не должен быть как-то привязан к конкретным размерам элемента, стилям, наличию или отсутствию рамки.

function getBorder(param) {
    return +param.substr(0, 2);
}
var field = document.getElementById('field');

let no1 = field.getBoundingClientRect().top + ':' + field.getBoundingClientRect().left;
let no2 = field.getBoundingClientRect().bottom + ':' + field.getBoundingClientRect().right;
let no3 = (field.getBoundingClientRect().top + getBorder(getComputedStyle(field).borderTop)) + ':' +
    (field.getBoundingClientRect().left + getBorder(getComputedStyle(field).borderLeft))
let no4 = (field.getBoundingClientRect().bottom - getBorder(getComputedStyle(field).borderBottom)) + ':' +
    (field.getBoundingClientRect().right + getBorder(getComputedStyle(field).borderRight))

//хитрі вони.  parceInt застосовують))))

// var coords = elem.getBoundingClientRect();

// var coords1 = [coords.left, coords.top];
// var coords2 = [coords.right, coords.bottom];
// Левый-верхний угол внутри
// Этот угол отстоит от наружных границ на размер рамки, который доступен через clientLeft/clientTop:

// var coords3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
// Правый-нижний угол внутри
// Этот угол отстоит от правой-нижней наружной границы на размер рамки. Так как нужная рамка находится
//ава-внизу, то специальных свойств для нее нет, но мы можем получить этот размер из CSS:

// var coords4 = [
//   coords.right - parseInt(getComputedStyle(field).borderRightWidth),
//   coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
// ]
// Можно получить их альтернативным путем, прибавив clientWidth/clientHeight к координатам левого-верхнего
//утреннего угла. Получится то же самое, пожалуй даже быстрее и изящнее.

// var coords4 = [
//   coords.left + elem.clientLeft + elem.clientWidth,
//   coords.top + elem.clientTop + elem.clientHeight

-- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Разместить заметку рядом с элементом
// важность: 5
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem, в зависимости от 
// position, сверху ("top"), справа ("right") или снизу ("bottom") от элемента anchor.

// Используйте её, чтобы сделать функцию showNote(anchor, position, html), которая показывает элемент с 
// классом note и текстом html на позиции position рядом с элементом anchor.

/**
 * Позиционирует элемент elem относительно элемента anchor, как указано в
 * в position.
 *
 * @param {Node} anchor     Элемент-якорь, относительно которого задана позиция
 * @param {string} position Позиция: одно из top/right/bottom
 * @param {Node} elem       Элемент, который будет позиционирован
 */
function positionAt(anchor, position, elem) {

    let coorAnchor = anchor.getBoundingClientRect();


    if (position == 'right') {
        elem.style.right = coorAnchor.right + "px";
        elem.style.top = (coorAnchor.bottom / 2) + "px";
    } else if (position == 'top') {
        elem.style.left = coorAnchor.left + "px";
        //не працює тут ні elem.offsetHeight ні elem.clientHeight. в розвязку через офсет зроблено
        elem.style.top = (coorAnchor.top - elem.clientHeight) + "px";
    } else if (position == 'bottom') {
        elem.style.left = coorAnchor.left + "px";
        elem.style.top = coorAnchor.bottom + "px";
    }

    //console.log(elem.offsetHeight);

    return elem;
}


/**
 * Показывает заметку с текстом html на позиции position
 * относительно элемента anchor
 */
function showNote(anchor, position, html) {

    let elem = document.createElement('div');
    elem = positionAt(anchor, position, elem);
    elem.innerHTML = html;
    elem.className = "note";
    document.body.appendChild(elem);
    console.log(elem.style.top + ":" + elem.style.left);
}

// проверка работоспособности
var blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "заметка сверху");
showNote(blockquote, "right", "заметка справа"); //права поїхала кудись за вікно вправо, 
//так само і в плінкері в розвязку
showNote(blockquote, "bottom", "заметка снизу");

-- -- -- -- -- -- -- -- -- -- -- -- --
Координаты в документе

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Область видимости для документа
// важность: 5
// Напишите функцию getDocumentScroll(), которая возвращает объект с информацией о текущей прокрутке и 
// области видимости.

// Свойства объекта-результата:

// top – координата верхней границы видимой части (относительно документа).
// bottom – координата нижней границы видимой части (относительно документа).
// height – полная высота документа, включая прокрутку.

function getDocumentScroll() {
    var res = {};
    res.top = window.pageYOffset;
    res.bottom = window.pageYOffset + documentElement.clientHeight;
    res.heigth = documentElement.scrollHeight;
    console.log(res);
    return res;
}

-- -- -- -- -- -- -- -- -- -- -- --

Разместить заметку рядом с элементом(absolute)
    // важность: 5
    // Модифицируйте решение задачи Разместить заметку рядом с элементом, чтобы при прокрутке страницы заметка 
    // не убегала от элемента.

// Используйте для этого координаты относительно документа и position:absolute вместо position:fixed.

// В качестве исходного документа используйте решение задачи Разместить заметку рядом с элементом, для 
// тестирования прокрутки добавьте стиль <body style="height: 2000px">.

function positionAt(anchor, position, elem) {

    let coorAnchor = anchor.getBoundingClientRect();


    if (position == 'right') {
        //змінив тільки right на left і встилях позиціонування на абсолютне
        elem.style.left = coorAnchor.right + "px";
        elem.style.top = (coorAnchor.bottom / 2) + "px";
    } else if (position == 'top') {
        elem.style.left = coorAnchor.left + "px";
        //не працює тут ні elem.offsetHeight ні elem.clientHeight. в розвязку через офсет зроблено
        elem.style.top = (coorAnchor.top - elem.clientHeight) + "px";
    } else if (position == 'bottom') {
        elem.style.left = coorAnchor.left + "px";
        elem.style.top = coorAnchor.bottom + "px";
    }

    //console.log(elem.offsetHeight);

    return elem;
}

-- -- -- -- -- -- -- -- -- -- -- -- --

Разместить заметку внутри элемента
// важность: 5
// Расширьте предыдущую задачу Разместить заметку рядом с элементом (absolute): научите функцию 
// positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения position:

// top-out, right-out, bottom-out – работают так же, как раньше, то есть вставляют elem над/справа/под anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: к верхней границе/правой/нижней.

//все одно офсет не працює.


switch (position) {
    case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

    case "right-out":
        elem.style.left = coorAnchor.right + "px";
        elem.style.top = coorAnchor.top + "px";
        break;

    case "bottom-out":
        elem.style.left = coorAnchor.left + "px";
        elem.style.top = coorAnchor.bottom + "px";
        break;

    case "top-in":
        elem.style.left = coorAnchor.left + "px";
        elem.style.top = coorAnchor.top + "px";
        break;

    case "right-in":
        elem.style.width = '150px';
        elem.style.left = coorAnchor.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = coorAnchor.top + "px";
        break;

    case "bottom-in":
        elem.style.left = coorAnchor.left + "px";
        elem.style.top = coorAnchor.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
}