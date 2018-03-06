prototype

Прототип объекта
Алгоритм для поиска
// важность: 5
// Задание состоит из двух частей:

// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> 
// table -> head.

// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

// После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? 
// Попробуйте протестировать.



var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};
//це моя реалізація, і при цьому console.log(pockets.pen == 3) виводить falseю чому?
//в розвяку прототипи розставлені окремо. 
pockets.__proto__ = bed.__proto__ = table.__proto__ = head;

console.log(pockets.pen == 3); //false
console.log(pockets, pen); //pen is not defined
console.log(bed.glasses == 1); //true
console.log(table.money == undefined); //true
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Свойство F.prototype и создание объектов через new

Аргументы по умолчанию
// важность: 4
// Есть функция Menu, которая получает аргументы в виде объекта options:
// Ряд опций должны иметь значение по умолчанию. Мы могли бы проставить их напрямую в объекте options:
// …Но такие изменения могут привести к непредвиденным результатам, т.к. объект options может быть повторно 
// использован во внешнем коде. Он передается в Menu для того, чтобы параметры из него читали, а не писали.
// Один из способов безопасно назначить значения по умолчанию – скопировать все свойства options в локальные 
// переменные и затем уже менять. Другой способ – клонировать options путём копирования всех свойств из него 
// в новый объект, который уже изменяется.
// При помощи наследования и Object.create предложите третий способ, который позволяет избежать копирования 
// объекта и не требует новых переменных.


/* options содержит настройки меню: width, height и т.п. */
function Menu(options) {
    ...
}

function Menu(options) {
    //так я бачив, а в розвязку створили обєкт, наслідуваний від object
    var values = Object.create(settings);
    values.__proto__.options = options;
    options.width = options.width || 300; // по умолчанию ширина 300
    ...
}
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
Встроенные "классы"
в JavaScript

Добавить функциям defer
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

//потім додивився що в розвязку ставиться не Object а Function. це погано
//бо бачитимуть його всі обєкти а не тільки функції???
Object.prototype.defer = function(ms) {
    setTimeout(this, ms);
}


function f() {
    alert("привет");
}

f.defer(1000); // выведет "привет" через 1 секунду
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
Добавить функциям defer с аргументами
//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, 
//откладывающую вызов функции на ms миллисекунд.  


//мої варіанти
Object.prototype.defer = function(ms) {
    return setTimeout(function() {
        this.apply(this, arguments);
    }, ms);
}

//тут більш правдоподібно. але не працює
//нижче є два варанти функції - їхній і їхній(модифікований мною) який не працює
//там використовуються перемінні, смисл прямий яких я бачу, а от суті для чого вони застосовуються
//не можу зрозуміти. поясни ці моменти!!!
Function.prototype.defer = function(ms) {
    return function() {
        setTimeout(function() {
            this.apply(this, arguments);
        }, ms);
    }
}

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
--
//їхній код сам не зміг
Function.prototype.defer = function(ms) {
    var f = this;
    return function() {
        var args = arguments,
            context = this;
        setTimeout(function() {
            f.apply(context, args);
        }, ms);
    }
}

// проверка
function f(a, b) {
    alert(a + b);
}
f.defer(1000)(1, 2);
-- -- -
//спрощу їхній варіант(без запису this у змінні)
//перевірив - не працює
Function.prototype.defer = function(ms) {
    //var f = this;
    return function() {
        //   var args = arguments,
        //     context = this;
        setTimeout(function() {
            this.apply(this, arguments);
        }, ms);
    }
}

// проверка
function f(a, b) {
    alert(a + b);
}
f.defer(1000)(1, 2);