// Добавить двойной голос в голосовалку
// важность: 5
// Создайте функцию-конструктор StepVoter, которая наследует от голосовалки, созданной в задаче 
// Голосовалка в прототипном стиле ООП и добавляет голосовалке опцию options.step, которая 
// задаёт «шаг» голоса.

// В реальном проекте влияние клика на голосовалку может зависеть от полномочий или репутации 
// посетителя.

// В качестве исходного кода используйте решение задачи Голосовалка в прототипном стиле ООП.

// P.S. Код voter.js изменять нельзя, нужно не переписать Voter, а отнаследовать от него.

function Voter(options) {
    this.voteLevel = 1;
    let plus = document.getElementsByClassName('up')[0];
    let minus = document.getElementsByClassName('down')[0];
    this.sum = document.getElementsByClassName('vote')[0];
    var selfVote = this.voteLevel;
    var sum = this.sum;


    minus.onclick = function(e) {
        //console.log(selfVote);
        sum.innerHTML = +sum.innerHTML - selfVote;
    }
    plus.onclick = function(e) {

        sum.innerHTML = +sum.innerHTML + selfVote;
    }

}


Voter.prototype.setVote = function(amount) {
    this.sum.innerHTML = amount;
}


function StepVoter(options) {
    Voter.apply(this, arguments);
    console.log(options.step);
    console.log(this.voteLevel);
    this.voteLevel = options.step;
    console.log(this.voteLevel);
}

StepVoter.prototype = Object.create(Voter.prototype);
StepVoter.prototype.constructor = Voter;



var voter = new StepVoter({
    elem: document.getElementById('voter'),
    step: 2 // увеличивать/уменьшать сразу на 2 пункта
});

voter.setVote(4);