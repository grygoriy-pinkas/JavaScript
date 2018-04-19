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
    var elem = this._elem = options.elem;
    this.sum = elem.querySelector('.vote');
    elem.onclick = this._onClick.bind(this);
}

Voter.prototype._onClick = function(e) {
    let target = e.target;
    if (target.closest('.up')) {
        this.sum.innerHTML = +this.sum.innerHTML + 1;
    }
    if (target.closest('.down')) {
        this.sum.innerHTML = +this.sum.innerHTML - 1;
    }
}


Voter.prototype.setVote = function(amount) {
    this.sum.innerHTML = amount;
}


function StepVoter(options) {
    Voter.apply(this, arguments);
    this.voteLevel = options.step || 1;
}

StepVoter.prototype = Object.create(Voter.prototype);
StepVoter.prototype.constructor = StepVoter;

StepVoter.prototype._onClick = function(e) {
    let target = e.target;
    if (target.closest('.up')) {
        this.sum.innerHTML = +this.sum.innerHTML + this.voteLevel;
    }
    if (target.closest('.down')) {
        this.sum.innerHTML = +this.sum.innerHTML - this.voteLevel;
    }
}

var voter = new StepVoter({
    elem: document.getElementById('voter'),
    step: 3 // увеличивать/уменьшать сразу на 2 пункта
});

voter.setVote(4);

//ОТЖЕ: ДЛЯ КОРЕКТНОСТІ РОБОТИ РОЗШИРЮВАНОГО КОНСТРУКТОРА ПОТРІБНО:
// 1. Створити новий конструктор і визвати в ньому батьківський конструктор з своїми
// властивостями і методами

// function StepVoter(options) {
//     Voter.apply(this, arguments);
//    Т тут якщо потрібно, то переоприділити властивості
// }
// 2. Унаслідувати для дочірнього констуктора прототип батьківського шляхом створення нового
// обєкту
// StepVoter.prototype = Object.create(Voter.prototype);
// StepVoter.prototype.constructor = StepVoter; призначити свій конструктор знову