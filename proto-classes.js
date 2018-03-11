Свои классы на прототипах

Перепишите в виде класса
// важность: 5
// Есть класс CoffeeMachine, заданный в функциональном стиле.

// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

// P.S. При описании через прототипы локальные переменные недоступны методам,
//  поэтому нужно будет переделать их в защищённые свойства.

var WATER_HEAT_CAPACITY = 4200;

function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._power = power;
}

CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        alert('Кофе готов!');
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

console.log(coffeeMachine._waterAmount);

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Хомяки с __proto__
// важность: 5
// Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил 
// задание создать класс «хомяк» (англ – "Hamster").

// Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.

// Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.

function Hamster() {
    //я зробив його свойством конструктора
    //в прототип варто зхаписувати тільки методи і константи?
    this.food = [];
}
//прочитав розвязок - я зробив добре. тільки не відразу
//Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
    //f = this;
    // return function() {
    return this.food.push(something);
    //}
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert(speedy.food.length); // 2
alert(lazy.food.length); // 2 (!??)


===

Класс "часы"
    // важность: 5
    // Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства 
    //timer, 
    // template и метод render.

// Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.

// P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).

function Clock(template) {
    this._timer = 0;

    //чому нрядок нижче не працює
    //this.template = template.template;
    template = template.template;
    //цей метод в прототип не виносити?
    this.render = function() {
        var time = new Date();
        var h = time.getHours();
        if (h < 10) h = '0' + h;
        var m = time.getMinutes();
        if (m < 10) m = '0' + m;
        var s = time.getSeconds();
        if (s < 10) s = '0' + s;
        //тут з виводом сильно не заморочувався
        //рядок нижче підглянув у відповіді, до в мене виходив громіздкий код
        var output = template.replace('h', h).replace('m', m).replace('s', s);

        console.log(output);

    }

}

Clock.prototype.start = function() {
    setInterval(this.render, 1000);
}

var clock = new Clock({ template: 'h:m:s' });
//clock.render();

clock.start();

===
===
===
===
===
=

Класс "расширенные часы"
важность: 5
    // Есть реализация часиков на прототипах.Создайте класс, расширяющий её, добавляющий поддержку параметра 
    // precision, который будет задавать частоту тика в setInterval.Значение по умолчанию: 1000.

// Для этого класс Clock надо унаследовать.Пишите ваш новый код в файле extended - clock.js.
// Исходный класс Clock менять нельзя.
// Пусть конструктор потомка вызывает конструктор родителя.Это позволит избежать проблем при расширении Clock 
// новыми опциями.

//я тут уже переніс render в прототип чим створив собі проблеми

function Clock(options) {
    this._timer = 0;
    this.template = options.template;
}

Clock.prototype.render = function() {
    //console.log(this.template);
    var time = new Date();

    var h = time.getHours();
    if (h < 10) h = '0' + h;
    var m = time.getMinutes();
    if (m < 10) m = '0' + m;
    var s = time.getSeconds();
    if (s < 10) s = '0' + s;
    var output = this.template.replace('h', h).replace('m', m).replace('s', s);

    console.log(output);
}

function ExtClock(options) {
    this.precision = +options.precision || 1000;
    Clock.apply(this, arguments);
}

ExtClock.prototype = Object.create(Clock.prototype);
ExtClock.prototype.constructor = ExtClock;

ExtClock.prototype.start = function() {
    this.render();
    var self = this;
    this._timer = setInterval(function() {
        self.render();
    }, this.precision);
}


var clock2 = new ExtClock({ template: 'h:m:s', precision: 10000 });

clock2.start();


===
===

Меню с таймером для анимации
// важность: 5
// Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

// Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

// При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается 
// вызовом open() родителя.
// Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому 
// close.
// Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.
function Menu() {
    this.state = 'STATE_CLOSED';

}

Menu.prototype.open = function() {
    this.state = 'STATE_OPEN';
}
Menu.prototype.close = function() {
    this.state = 'STATE_CLOSED';
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

function AnimatingMenu() {
    this.state = 'STATE_ANIMATING';
    Menu.apply(this);
}

AnimatingMenu.prototype.showState = function() {
    if (this.state == 'STATE_ANIMATING') {
        alert("animation");
    } else if (this.state == 'STATE_OPEN') {
        alert("Open")
    } else {
        alert("Close");
    }

}

AnimatingMenu.prototype.open = function() {
    this.state = 'STATE_ANIMATING';
    var self = this;
    this.anime = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);
}

AnimatingMenu.prototype.close = function() {
    clearTimeout(this.anime);
    Menu.prototype.close.apply(this);
}

var menu = new AnimatingMenu();


var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1000);

===
=== === === === === === === =

//це годинник з правильно(надіюсь) переданим контекстом
function Clock(template) {
    this._timer = 0;
    this.template = template.template;

    this.render = function() {

        var time = new Date();
        var h = time.getHours();
        if (h < 10) h = '0' + h;
        var m = time.getMinutes();
        if (m < 10) m = '0' + m;
        var s = time.getSeconds();
        if (s < 10) s = '0' + s;

        var output = this.template.replace('h', h).replace('m', m).replace('s', s);

        console.log(output);
    }

}

Clock.prototype.start = function() {
    var set = this;
    this.timer = setInterval(function() {
        set.render();
    }, 1000);
}

var clock = new Clock({ template: 'h:m:s' });
//clock.render();

clock.start();