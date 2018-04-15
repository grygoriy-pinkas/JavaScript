// Компонент: список с выделением
// важность: 5
// Перепишите решение задачи Список с выделением в виде компонента.

// У компонента должен быть единственный публичный метод getSelected(), который возвращает 
// выбранные значения в виде массива.

//??????????????????????
// НЕЗНАЮ ЧИ ЗАПИХАТИ ВСІ ФУНКЦІЇ В ВІДЖЕТ
//?????????????????????


function ListSelect(options) {
    var list = options.elem;
    list.addEventListener('click', actions);

    function getSelected() {
        var selected = [];
        [].forEach.call(list.children, function(elem) {
            if (elem.classList.contains("highlighted")) {
                selected.push(elem.textContent)
            }
        });
        console.log(selected);
        return selected;
    }
    this.getSelected = getSelected;
}


var last;

function actions(e) {
    let target = e.target;

    if (!e.ctrlKey && !e.shiftKey) {
        if (last) {
            last.className = '';
        }
        target.className = 'highlighted';
        last = target;
    }
    if (e.ctrlKey) {
        if (target.className == 'highlighted') {
            target.className = ''
        } else {
            target.className = 'highlighted'
        }
    }


    if (e.shiftKey) {
        ifShift(last, e);
    }
}

function ifShift(lastTarget, e) {
    let target = e.target;
    var startElem = last || list.children[0];

    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;

    if (isLastClickedBefore) {
        for (var elem = startElem; elem != target.nextElementSibling; elem = elem.nextElementSibling) {
            console.log("enter");
            elem.className = 'highlighted';
        }
    }

}


var listSelect = new ListSelect({
    elem: document.querySelector('ul')
});

function show() {
    listSelect.getSelected();
}