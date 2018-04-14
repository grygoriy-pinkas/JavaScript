// Автовычисление процентов по вкладу
// важность: 5
// Создайте интерфейс для автоматического вычисления процентов по вкладу.

// Ставка фиксирована: 12% годовых. При включённом поле «капитализация» – проценты 
// приплюсовываются к сумме вклада каждый месяц (сложный процент).

// Технические требования:

// В поле с суммой должно быть нельзя ввести не-цифру. При этом пусть в нём работают 
// специальные клавиши и сочетания Ctrl-X/Ctrl-V.
// Изменения в форме отражаются в результатах сразу.



var money, months, ifCap;
//тут були такі справи що id в розмітці були через дефіз, а я їх змінив на 
//верблюдів. десь зустрічав, але забув як застосовувати дефізи в JS. підкажи

//також не реалізував роботу  Ctrl-X/Ctrl-V

document.oninput = function() {
    getData();
    if (preventWrongInput()) {
        calc();
    } else {
        return;
    }
}
document.onchange = function() {
    getData();
    calc();
}

function getData() {
    money = +document.getElementsByName('money')[0].value;
    months = document.getElementsByName('months')[0].selectedIndex;
    ifCap = document.getElementsByName('capitalization')[0].checked;
}

function preventWrongInput() {
    return isNumeric(document.getElementsByName('money')[0].value);
}

function sum() {
    var sum;
    if (ifCap) {
        //console.log('cap');
        //формулу складних відсотків взяв найпростішу
        sum = parseInt(money * Math.pow(1.01, months)); //capit 
    } else {
        //console.log('notCap');
        sum = money + ((money * 0.12) * (months / 12)); //none cap
    }
    return sum;
}

function calc() {
    let res = parseInt(sum());
    let height = res / money * 100;
    heigthAfter.style.height = height + 'px';
    moneyBefore.innerHTML = money;
    moneyAfter.innerHTML = res;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
}