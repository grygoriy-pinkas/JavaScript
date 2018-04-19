// Добавить двойной голос в голосовалку
// важность: 5
// Создайте функцию-конструктор StepVoter, которая наследует от голосовалки, созданной в задаче 
// Голосовалка в прототипном стиле ООП и добавляет голосовалке опцию options.step, которая 
// задаёт «шаг» голоса.

// В реальном проекте влияние клика на голосовалку может зависеть от полномочий или репутации 
// посетителя.

// В качестве исходного кода используйте решение задачи Голосовалка в прототипном стиле ООП.

// P.S. Код voter.js изменять нельзя, нужно не переписать Voter, а отнаследовать от него.

class Voter {
    constructor(options) {
        this._elem = options.elem;
        this.sum = this._elem.querySelector('.vote');
        this._elem.onclick = this.onClick.bind(this);
    }

    onClick(e) {
        let target = e.target;
        if (target.closest('.up')) {
            this.sum.innerHTML = +this.sum.innerHTML + 1;
        }
        if (target.closest('.down')) {
            this.sum.innerHTML = +this.sum.innerHTML - 1;
        }
    }


    setVote(amount) {
        this.sum.innerHTML = amount;
    }

}

//БАТЬКІВСЬКИЙ КЛАС АВТОНОМНО ПРАЦЮЄ ДОБРЕ
// var vot = new Voter({
//     elem: document.getElementById('voter')
// });

// vot.setVote(5);

// ????????????????????????????
//НЕ МОЖУ РОЗІБРАТИСЬ З БАТЬКІВСЬКИМ КОНСТРУКТОРОМ, НЕ БАЧИТЬ АРГУМЕНТІВ 
// ????????????????????????????????????
class StepVoter extends Voter {
    //ЯКЩО Я НЕ ОГОЛОШУЮ ТУТ КОНСТРУКТОРА, ТО БЕРЕТЬСЯ БАТЬКІВСЬКИЙ
    // constructor(options) {
    //     super();
    // }

    //пробую достати нову властивість через геттер
    get voteLevel() {
        this.voteLevel = options.step || 1;
    }

    onClick(e) {
        let target = e.target;
        if (target.closest('.up')) {
            this.sum.innerHTML = +this.sum.innerHTML + this.voteLevel;
        }
        if (target.closest('.down')) {
            this.sum.innerHTML = +this.sum.innerHTML - this.voteLevel;
        }
    }
}

var voter = new StepVoter({
    elem: document.getElementById('voter'),
    step: 3 // увеличивать/уменьшать сразу на 2 пункта
});

voter.setVote(4);