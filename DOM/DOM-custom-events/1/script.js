// Голосовалка
// важность: 5

// По клику на + и — число должно увеличиваться или уменьшаться.

// Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.

// Все остальные методы и свойства пусть будут приватными.

function Voter(options) {
    var elem = options.elem;
    let plus = elem.getElementsByClassName('up')[0];
    let minus = elem.getElementsByClassName('down')[0];
    const sumElem = document.getElementsByClassName('vote')[0];

    console.log(elem);




    function setVote(amount) {
        sumElem.innerHTML = amount;
        //ВИХОДИТЬ ТРЕБА БУЛО ПЕРЕНЕСТИ ФУНКЦІЮ В СЕРЕДИНУ setVote
        //ТОБТО ЛОГІКА В ТОМУ, ЩОБ ПРИ ЯКИХОСЬ ДІЯХ, В ДАНОМУ ВИПАДКУ ЗАПИС КІЛЬКОСТІ ГОЛОСІВ 
        //СТВОРЮВАЛАСЬ ЩЕ ОДНА (ШТУЧНА ПОДІЯ І ЛІСЕНЕР ЧЕКАВ НА НЕЇ І ЩОСЬ РОБИВ????????)
        //function change(sumElem) {
        var widgetEvent = new CustomEvent('change', {
            bubbles: true,
            // detail - стандартное свойство CustomEvent для произвольных данных
            detail: sumElem.innerHTML
        });
        elem.dispatchEvent(widgetEvent);
        // }
    }


    minus.onclick = function(e) {
        setVote(+sumElem.innerHTML - 1);
    }
    plus.onclick = function(e) {
        setVote(+sumElem.innerHTML + 1);
    }



    this.setVote = setVote;
}


var voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(5);

document.getElementById('voter').addEventListener('change', function(e) {
    alert(e.detail); // новое значение голоса
    console.log('i work');
});