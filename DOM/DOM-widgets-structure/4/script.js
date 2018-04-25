// Голосовалка
// важность: 5

// По клику на + и — число должно увеличиваться или уменьшаться.

// Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.

// Все остальные методы и свойства пусть будут приватными.

function Voter(options) {
    let plus = document.getElementsByClassName('up')[0];
    let minus = document.getElementsByClassName('down')[0];
    const sumElem = document.getElementsByClassName('vote')[0];


    function setVote(amount) {
        sumElem.innerHTML = amount;
    }
    minus.onclick = function(e) {
        sumElem.innerHTML = +sumElem.innerHTML - 1;
    }
    plus.onclick = function(e) {
        sumElem.innerHTML = +sumElem.innerHTML + 1;
    }

    this.setVote = setVote;
}

var voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(3);