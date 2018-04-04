//згадав що не треба шукати елемент якщо він має id
//console.log(list);

list.addEventListener('click', actions);
//var lastTarget;

function actions(e) {
    let target = e.target;
    if (!e.ctrlKey) //без цієї умови не хотіло ставити виділення з ctrl. чому? 

        target.className = 'highlighted';
    if (e.ctrlKey) {
        console.log(target.className);
        if (target.className == 'highlighted') {
            target.className = ''
        } else {
            target.className = 'highlighted'
        }
        //target.className = 'highlighted' ? target.className = '' : target.className = 'highlighted';
        //if(target.className = '')
        //target.className = '' ? target.className = 'highlighted' : ;
    }
    var lastTarget = target;

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
        ifShift(lastTarget, e);

    }

}

function ifShift(lastTarget, e) {
    let target = e.target;
    //третій варіант - взятий з розвязку. теж непрацює. допоможи розібратись
    var startElem = lastTarget || ul.children[0];
    console.log(startElem.compareDocumentPosition(target));
    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
    console.log(lastTarget);
    console.log(startElem);
    console.log(target);
    console.log(isLastClickedBefore);
    if (isLastClickedBefore) {
        for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
            console.log("enter");
            target.className = 'highlighted';
        }
    }

}