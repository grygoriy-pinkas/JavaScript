//згадав що не треба шукати елемент якщо він має id
//console.log(list);

list.addEventListener('click', actions);

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
        //мій перший спосіб - неробочий
        // let finish = target.nextElementSibling
        // while (!finish) {
        //      lastTarget.style.backgroundColor == 'green';
        //     lastTarget = lastTarget.nextElementSibling;
        //     console.log(lastTarget);
        // }

        //мій другий варіант - неробочий
        // while (target.compareDocumentPosition(lastTarget) != 0) {
        //     lastTarget.style.backgroundColor == 'green';
        //     lastTarget = lastTarget.nextElementSibling;
        //     console.log(lastTarget);
        // }
        ifShift(last, e);

    }
}

function ifShift(lastTarget, e) {
    let target = e.target;
    var startElem = last || list.children[0];
    console.log(startElem.compareDocumentPosition(target));
    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
    console.log(last);
    console.log(startElem);
    console.log(target);
    console.log(isLastClickedBefore);
    if (isLastClickedBefore) {
        for (var elem = startElem; elem != target.nextElementSibling; elem = elem.nextElementSibling) {
            console.log("enter");
            elem.className = 'highlighted';
        }
    }

}