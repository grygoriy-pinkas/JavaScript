// Голосовалка
// важность: 5

// По клику на + и — число должно увеличиваться или уменьшаться.

// Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.

// Все остальные методы и свойства пусть будут приватными.

function Voter(options) {
    let plus = document.getElementsByClassName('up')[0];
    let minus = document.getElementsByClassName('down')[0];
    var sume = document.getElementsByClassName('vote')[0];
    this.voteLevel = 1;

    function setVote(amount) {
        sume.innerHTML = amount;
    }
    minus.onclick = function(e) {
        sume.innerHTML = +sume.innerHTML - voteLevel;
    }
    plus.onclick = function(e) {
        sume.innerHTML = +sume.innerHTML + voteLevel;
    }

    this.setVote = setVote;
}

var voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(3);