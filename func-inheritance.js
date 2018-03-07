Функциональное наследование

Запускать только при включённой кофеварке
// важность: 5
// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine() {
    Machine.apply(this, arguments);
    //я тут нижче зробив по своєму, але мабуть прийдеться розширювати код в наступних задачах
    //то взяв їхній
    // this.run = function() {
    //     if (!this._enabled) {
    //         console.log("ошибка, кофеварка выключена!");
    //     } else {
    //         setTimeout(function() {
    //             console.log("Кофе готов!");
    //         }, ms);
    //     }
    // }

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        setTimeout(onReady, 1000);
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
// А вот так – всё в порядке:

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!

_________________

Останавливать кофеварку при выключении
// важность: 5
// Когда кофеварку выключают – текущая варка кофе должна останавливаться

function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;

    };
}

function CoffeeMachine() {
    Machine.apply(this, arguments);
    var waterAmount = 0;
    var timer;

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timer);
    }

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {

        //if(this._enabled){
        alert('Кофе готов!');
        // } else {
        //clearTimeout(timer);
        // }
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        timer = setTimeout(function() {
            onReady();
        }, 1000);
    };
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет

_________________