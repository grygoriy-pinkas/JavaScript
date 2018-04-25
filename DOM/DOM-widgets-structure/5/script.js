// Голосовалка в прототипном стиле ООП
// важность: 5
// Поменяйте стиль ООП в голосовалке, созданной в задаче Голосовалка на прототипный.

// Внешний код, использующий класс Voter, не должен измениться.

// В качестве исходного кода возьмите решение задачи Голосовалка.

function Voter(options) {
    var elem = this._elem = options.elem;
    this.sum = document.getElementsByClassName('vote')[0];
    elem.onclick = this._onClick.bind(this);
}

Voter.prototype._onClick = function(e) {
    this.target = e.target;
    if (this.target.className == 'up') {
        this.sum.innerHTML = +this.sum.innerHTML + 1;
    }
    if (this.target.className == 'down') {
        this.sum.innerHTML = +this.sum.innerHTML - 1;
    }
}

//невдавалось мені this.amount встановити, то я поліз в розвязок
//і там побачив що setVote встановлює початкове значення, а я думав що то крок додавання
Voter.prototype.setVote = function(amount) {
    this.sum.innerHTML = amount;
}

var voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(3);