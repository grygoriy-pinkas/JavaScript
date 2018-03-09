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

coffeeMachine.waterAmount
console.log(coffeeMachine.waterAmount);

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
===
===
===
===
===
===
===
===
===
===
===
===
===
===
===
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
    // і відповідно this.template.replace не працює
    //this.template = template.template;
    template = template.template;
    //цей метод в прототип не виносити?
    this.render = function() {
        var time = Date.now();
        var str = new Date(time).toISOString();
        var date = str.substr(11, 2) + '.' + str.substr(14, 2) + '.' + str.substr(17, 2);
        var h = str.substr(11, 2);
        var m = str.substr(14, 2);
        var s = str.substr(17, 2);
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
    // console.log(typeof this.template);
    // console.log(this.template);
}

Clock.prototype.render = function() {
    //console.log(this.template);
    var time = Date.now();
    var str = new Date(time).toISOString();
    var date = str.substr(11, 2) + '.' + str.substr(14, 2) + '.' + str.substr(17, 2);
    var h = str.substr(11, 2);
    var m = str.substr(14, 2);
    var s = str.substr(17, 2);
    //тут з виводом сильно не заморочувався
    //рядок нижче підглянув у відповіді, до в мене виходив громіздкий код
    //оце this не працювало
    var output = this.template.replace('h', h).replace('m', m).replace('s', s);

    console.log(output);
}

Clock.prototype.start = function() {
    //старт місив взяти з розвязку попередньої задачі
    //рядок нижче я закоментував, без нього працює, не розумію для чого він тут
    //this.render();
    //також не розумів чого не працювало бе запису контексту в змінну
    //спробую пояснити а ти підтвердиш
    //це this відноситься до поточного обєкту, а функція яка викликається в середині інтервалу
    //має свій контекст(тобто він втрачається припередачі в іншу область видимості)??????????
    var self = this;
    this._timer = setInterval(function() {
        self.render();
    }, 1000);
}
Clock.prototype.stop = function() {
        clearInterval(this._time);
    }
    //child


function ExtClock(options) {
    this.precision = +options.precision || 1000;
    Clock.apply(this, arguments);
}

ExtClock.prototype = Object.create(Clock.prototype);
ExtClock.prototype.constructor = ExtClock;

ExtClock.prototype.start = function() {
    //я спочатку так зробив. в мене тікало щосекунди, я це взяв з урока
    //Clock.prototype.start.apply(this, arguments);
    this.render(); //зрозумів для чого рендер тут
    var self = this;
    this._timer = setInterval(function() {
        self.render();
    }, this.precision);
}


var clock2 = new ExtClock({ template: 'h:m:s', precision: 10000 });
console.log(clock2);

clock2.start();

===
===
===
===
===
===
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
    this.STATE_OPEN;
    this.STATE_CLOSED;
}

Menu.prototype.open = function() {
    this.STATE_OPEN = true;
    this.STATE_CLOSED = false;
}
Menu.prototype.close = function() {
    this.STATE_OPEN = false;
    this.STATE_CLOSED = true;
}

function AnimatingMenu() {
    this.anime;
    Menu.apply(this, arguments);
    this.STATE_ANIMATING;
}


AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.showState = function() {
    if (this.STATE_ANIMATING) {
        alert("animation");
    } else if (this.STATE_OPEN) {
        alert("Open")
    } else {
        alert("Close");
    }

}

AnimatingMenu.prototype.open = function() {
    this.STATE_ANIMATING = true;
    this.showState();
    this.anime = setTimeout(function() {
        Menu.prototype.open.apply(this, arguments);
    }, 1000);
}

AnimatingMenu.prototype.close = function() {
    clearTimeout(this.anime);
    Menu.prototype.close.apply(this, arguments);
}

var menu = new AnimatingMenu();
console.log(menu);
menu.open();