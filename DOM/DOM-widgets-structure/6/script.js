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
    //я змінив цей рядокб додавши аргументи які раніше не передбачалися
    //це мабуть неправильно(ряд. 12), але в мене чомусь не переоприділяло this.amount
    //в StepVoter ряд. 42-43. Допоможи з цим розібратись
    this.amount = options.step || 1;
    let elem = options.elem;
    let plus = elem.children[2];
    let minus = elem.children[0];
    var sum = elem.children[1];
    var selfAmount = this.amount;

    minus.onclick = function(e) {
        sum.innerHTML = +sum.innerHTML - selfAmount;
    }
    plus.onclick = function(e) {
        sum.innerHTML = +sum.innerHTML + selfAmount;
    }
}

Voter.prototype.setVote = function(amount) {
    this.sum.innerHTML = amount;
}


function StepVoter(options) {
    Voter.apply(this, arguments);
    // this.amount = options.step;
    //console.log(this.amount);
}

StepVoter.prototype = Object.create(Voter.prototype);

var voter = new StepVoter({
    elem: document.getElementById('voter'),
    step: 2 // увеличивать/уменьшать сразу на 2 пункта
});