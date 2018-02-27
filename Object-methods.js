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
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
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
            var arr = str.split(' ');
            var a = +arr[0];
            var b = +arr[2];
            var operator = arr[1];

            if (operator == '+') {
                return this.a + this.b;
            } else if (operator == "-") {
                return this.a - this.b;
            } else {

                return this[operator](a, b);

            }
            console.log(typeof a);
            console.log(typeof b);
            console.log(a);
            console.log(b);
            console.log(operator);
        }
        this.addMethod = function(name, func) {
            this[name] = func;
        }
        this.alert = function() {
            for (var key in this) {
                console.log(key);
            }
        }
    }
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

    console.log(result); // 8
    console.log(powerCalc);

    ___________________________________________________________

    Дескрипторы, геттеры и сеттеры свойств

    Добавить get / set - свойства
        // важность: 5
        // Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

    // function User(fullName) {
    //   this.fullName = fullName;
    // }

    // var vasya = new User("Василий Попкин");
    // Имя и фамилия всегда разделяются пробелом.

    // Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, 
    // но и на запись, вот так:

    // var vasya = new User("Василий Попкин");

    // // чтение firstName/lastName
    // alert( vasya.firstName ); // Василий
    // alert( vasya.lastName ); // Попкин

    // // запись в lastName
    // vasya.lastName = 'Сидоров';

    // alert( vasya.fullName ); // Василий Сидоров
    // Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы 
    // через get/set. Лишнее дублирование здесь ни к чему.

    ____
    //ненаю чи там мало б працювати але не працює
    function User(fullName) {
        this.fullName = fullName;


        Object.defineProperty(User, "firstName", {
            get: function() {
                return this.firstName;
            },
            set: function(fullName) {
                var split = this.fullName.split(' ');
                this.firstName = split[0];
            }
        });

        Object.defineProperty(User, "lastName", {
            get: function() {
                return this.lastName;
            },
            set: function(fullName) {
                var split = this.fullName.split(' ');
                this.lastName = split[1];
            }
        });
    }
    var vasya = new User("Василий Попкин");

    // чтение firstName/lastName
    console.log(vasya.firstName); // Василий
    console.log(vasya.lastName); // Попкин

    // запись в lastName
    vasya.lastName = 'Сидоров';

    console.log(vasya.fullName);
    console.log(vasya);
    ____
    ____

    function User(fullName) {
        this.fullName = fullName;
        var split = fullName.split(' ');
        console.log(split);
        this.firstName = split[0];
        this.lastName = split[1];

        Object.defineProperty(User, "firstName", {
            get: function() {
                return this.firstName;
            },
            set: function(fullName) {
                var split = this.fullName.split(' ');
                this.firstName = split[0];
            }
        });

        //також виникає питання чому переповнюється стек при вказуванні в рядку нижче this замість User?
        Object.defineProperty(User, "lastName", {
            get: function() {
                return this.lastName;
            },
            //я тут спеціально закоментував нижче щоб переконатись що код працює без сеттера
            //тоді нащо тут його???? код без явного задавання значень не працює.
            // set: function(value) {
            //     var split = value.split(' ');
            //     this.lastName = split[1];
            // }
        });
    }
    var vasya = new User("Василий Попкин");

    // чтение firstName/lastName
    console.log(vasya.firstName); // Василий
    console.log(vasya.lastName); // Попкин

    // запись в lastName
    //тут прямий запис без сеттера?
    vasya.lastName = 'Сидоров';

    console.log(vasya.fullName);
    console.log(vasya);