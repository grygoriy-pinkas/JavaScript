// Подсказка при замедлении над элементом
// важность: 5
// Нужно написать функцию, которая показывает подсказку при наведении на элемент, но не при быстром проходе над 
// ним.

// То есть, если посетитель именно навёл курсор мыши на элемент и почти остановился – подсказку показать, а 
// если быстро провёл над ним, то не надо, зачем излишнее мигание?

// Технически – можно измерять скорость движения мыши над элементом, если она маленькая, то считаем, что это 
// «наведение на элемент» (показать подсказку), если большая – «быстрый проход мимо элемента» (не показывать).

// Реализуйте это через универсальный объект new HoverIntent(options), с параметрами options:

// elem – элемент, наведение на который нужно отслеживать.
// over – функция-обработчик наведения на элемент.
// out – функция-обработчик ухода с элемента (если было наведение).
// Если провести мышкой над «часиками» быстро, то ничего не будет, а если медленно или остановиться на них, то 
// появится подсказка.

// Обратите внимание – подсказка не «мигает» при проходе мыши внутри «часиков», по подэлементам.


//шось таке у мене вийшло. тести не проходить, але візуально працює.
//дивлюсь в розвяок, та багато заморочок вони вживають
//тож незнаю що дальше робити. оціни даний варіант
var tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Подсказка";

function HoverIntent(options) {
    options = Object.create(options);
    options.elem.onmouseenter = function(event) {
        console.log(event);
        var purpose = document.elementFromPoint(event.clientX, event.clientY);
        if (purpose == options.elem) {
            setTimeout(options.over, 300);
        }
    };

    options.elem.onmouseleave = function() {
        options.out();
    }
}

// при "наведении на элемент" показать подсказку
//це їхній код для перевірки this.getBoundingClientRect() я поміняв на конкретний elem.getBoundingClientRect()
//тому що контекстом був обєкт який передали в аргумент. чому так???
new HoverIntent({
    elem: elem,
    over: function() {
        tooltip.style.left = elem.getBoundingClientRect().left + 'px';
        tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
        document.body.appendChild(tooltip);
    },
    out: function() {
        //Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
        //дивний текст помилки для мене) але я його закоментив і додав свій
        //document.body.removeChild(tooltip);
        tooltip.remove();
    }
});