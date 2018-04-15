// Голосовалка
// важность: 5

// По клику на + и — число должно увеличиваться или уменьшаться.

// Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.

// Все остальные методы и свойства пусть будут приватными.

function Voter(options) {
    var elem = options.elem;
    let plus = elem.children[2];
    let minus = elem.children[0];
    var sume = elem.children[1];
    var amount;

    function setVote(measure) {
        amount = measure;
    }
    minus.onclick = function(e) {
        sume.innerHTML = +sume.innerHTML - amount;
    }
    plus.onclick = function(e) {
        sume.innerHTML = +sume.innerHTML + amount;
    }

    this.setVote = setVote;
}

var voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(3);