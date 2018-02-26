Методы объектов и контекст вызова
Методы объектов, this

Создайте калькулятор
// важность: 5
// Создайте объект calculator с тремя методами:

// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений

var calculator = {
    read: function() {
        this.a = +prompt("Enter first number", '1');
        this.b = +prompt("Enter second number", '1');
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};

//good works
//var test = calculator;
// test.read();
// console.log(test);

calculator.read();

console.log(calculator.a);
console.log(calculator.b);
console.log(calculator.sum());
console.log(calculator.mul());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Цепочка вызовов
// важность: 2
// Есть объект «лестница» ladder:

// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//   }
// };
// Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

// ladder.up().up().down().up().down().showStep(); // 1
// Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

// Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().up().down().showStep();
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
Сумма произвольного количества скобок
// важность: 2
// Напишите функцию sum, которая будет работать так:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// Количество скобок может быть любым.

//не була мною розвязана

function sum(x) {
    var sum = x;

    function f(y) {
        sum = sum + y;
        //не подумав вертати саму себе
        return f;
    }
    f.toString = function() {
        return sum;
    }
    return f;
}

sum(1)(2)(3);

sum(1)(2); // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6;
sum(6)(-1)(-2)(-3) == 0;
sum(0)(1)(2)(3)(4)(5) == 15;
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

Создать Calculator при помощи конструктора
// важность: 5
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

function Calculator() {
    this.read = function() {
            this.a = +prompt("Enter first number", '1');
            this.b = +prompt("Enter second number", '1');
        },
        this.sum = function() {
            return this.a + this.b;
        },
        this.mul = function() {
            return this.a * this.b;
        }
    return this;
};

var calculator = new Calculator();
calculator.read();

console.log("Сумма=" + calculator.sum());
console.log("Произведение=" + calculator.mul());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Создать Accumulator при помощи конструктора
// важность: 5
// Напишите функцию - конструктор Accumulator(startingValue).Объекты, которые она создает,
//     должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
// Более формально, объект должен:
//     Хранить текущее значение в своём свойстве value.Начальное значение свойства value ставится
// конструктором равным startingValue.
// Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах
// метода read(), с учетом начального значения startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
            return this.value += +prompt("Enter number", '0');

        }
        //хотів тут реалізувати внутрішній функціонал(якщо функція не призначена для this то вона застосовується 
        //тільки для внутрішнього використання і не буде видна при виклику з дочірніми обєктами), але 
        //воно тут виявилось непотрібним
    function sum() {
        return this.value += this.read;
    }
    return this.value;
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение
_________________________________________________________________________________
Создайте калькулятор
// важность: 5
// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
// Эта задача состоит из двух частей, которые можно решать одна за другой.
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом
//  «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и
//   минус -.
// Пример использования:

// var calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции.
//  Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

// Например, добавим операции умножить *, поделить / и возвести в степень **:

// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.

function Calculator() {
    this.calculate = function(str) {
        // var gap = str.indexOf(' ');
        function innerFunc() {};
        var a = +str.substr(0, str.indexOf(' '));
        var b = +str.substr(str.indexOf(' ', str.indexOf(' ') + 2));
        var operator = str.substring(str.indexOf(' ') + 1, str.lastIndexOf(' '));;

        if (operator == '+') {
            return this.a + this.b;
        } else if (operator == "-") {
            return this.a - this.b;
        } else {
            //ця частина коду чомусь каже що this.operator не є функцією
            //хоча виводячи обєкт в консолі отримуємо 
            // *:ƒ(a, b) 
            // **:ƒ(a, b) 
            // /:ƒ(a, b)
            // addMethod: ƒ(name, func)
            // alert:ƒ()
            // calculate:ƒ(str)
            // __proto__:Object
            //в одному з коментів таке працює
            return this.operator(a, b);
            //var call = "this." + operator;
            //return call(a, b);
            //console.log(call);
        }
        console.log(typeof a);
        console.log(typeof b);
        console.log(a);
        console.log(b);
        console.log(operator);
    }
    this.addMethod = function(name, func) {
        //чому так не записує методи а змінну????
        //this.name = func;
        //а так записує
        //піддивився її в одному з коментарів
        this[name] = func;
    }
    this.alert = function() {
        for (var key in this) {
            console.log(key);
        }
    }
}
// var calc = new Calculator;

//console.log(calc.calculate("3 + 7"));
// console.log(calc.calculate("5317 - 73"));

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 * 3");
// var result2 = powerCalc.calculate("**", function(2, 3) {
//     return Math.pow(a, b);
// });
console.log(result); // 8
console.log(powerCalc);
//console.log(powerCalc.mult);
//powerCalc.alert();