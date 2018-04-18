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
    var elem = this._elem = options.elem;
    this.sum = document.getElementsByClassName('vote')[0];
    elem.onclick = this._onClick.bind(this);

}
Voter.prototype._onClick = function(e) {
    this.target = e.target;
    if (this.target.className == 'up') {
        this.sum.innerHTML = +this.sum.innerHTML + this.voteLevel;
    }
    if (this.target.className == 'down') {
        this.sum.innerHTML = +this.sum.innerHTML - this.voteLevel;
    }
}


Voter.prototype.setVote = function(amount) {
    this.sum.innerHTML = amount;
}


function StepVoter(options) {
    Voter.apply(this, arguments);
    this.voteLevel = options.step;
}

StepVoter.prototype = Object.create(Voter.prototype);
//РЯДОК НИЖЧЕ ЗАМІНЯЄ ОГОЛОШЕННЯ НОВОГО КОНСТРУКТОРА ЧЕРЕЗ ФУНКЦІЮ???????????????В ТОМУ 
//ВИПАДКУ ВИКОРИСТОВУЄТЬСЯ КОЛИ НЕПОТРІБНО ПЕРЕОПРИДІЛЯТИ ВЛАСТИВОСТІ????????????????
//????????????????????????
//StepVoter.prototype.constructor = Voter;



var voter = new StepVoter({
    elem: document.getElementById('voter'),
    step: 2 // увеличивать/уменьшать сразу на 2 пункта
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