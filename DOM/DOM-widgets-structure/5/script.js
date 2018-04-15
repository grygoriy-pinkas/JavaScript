// Голосовалка в прототипном стиле ООП
// важность: 5
// Поменяйте стиль ООП в голосовалке, созданной в задаче Голосовалка на прототипный.

// Внешний код, использующий класс Voter, не должен измениться.

// В качестве исходного кода возьмите решение задачи Голосовалка.


function Voter(options) {
    this.amount = 0;
    var elem = options.elem;
    let plus = elem.children[2];
    let minus = elem.children[0];
    this.sum = elem.children[1];

    var sum = this.sum;
    minus.onclick = function(e) {

        sum.innerHTML = +sum.innerHTML - 1;
    }
    plus.onclick = function(e) {

        sum.innerHTML = +sum.innerHTML + 1;
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