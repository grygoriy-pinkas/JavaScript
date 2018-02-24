Локальные переменные для объекта

// Сумма через замыкание
// важность: 4
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
// Да, именно так, через двойные скобки (это не опечатка)

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

-- -- -- -- -- -- -- -- -- -- -- -- -
// Функция - строковый буфер
// важность: 5
// В некоторых языках программирования существует объект «строковый буфер», который аккумулирует
// внутри себя значения. Его функционал состоит из двух возможностей:

// Добавить значение в буфер.
// Получить текущее содержимое.
// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) 
//добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – 
//возвращает его.
//рішення з обєктом
function makeBuffer() {
    var obj = {value:''};

    return function buffer(arg) {
        if(arg !== undefined){
       // arg = arg + '';
        obj.value += arg;
        }
        //console.log(obj.value);
        return obj.value;
    }

}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer());

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

console.log(buffer());

//in array
function makeBuffer() {
    var buffer = [];

    return function add(arg) {
        if (arguments.length != 0) {
            buffer.push(arg);
        } else {

            return buffer.join(' ');
        }

    }

}

var buffer = makeBuffer();

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

console.log(buffer());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Строковый буфер с очисткой
// важность: 5
// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее 
//содержимое буфера:

//трохи переробив основний код

function makeBuffer() {
    var value = '';

    function add(arg) {

        if (arguments.length == 0) {
            return value;
        }
        value += arg;
    }
    add.clear = function() {
        //var clear = function() {
        value = '0';
    }
    return add;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

buffer.clear();
//console.log(typeof buffer.clear());
console.log(buffer());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Фильтрация через функцию
// важность: 5
// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr,
// для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть
// таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

function filter(arr, func) {
    var newArr = [];
    arr.forEach(function(item, i, arr) {
        if (func(item)) {
            newArr.push(item);
        }
    })

    return newArr;
}

function inArray(array) {
    return function(x) {
        var a;
        array.forEach(function(item, i) {
            if (item == x) {
                a = true;
                return a;
            }
        });
        return a;
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, inArray([1, 2, 10])));

function inBetween(a, b) {
    return function(item){
      return  item >= a && item <= b ? true : false;
      
    }
}


console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

console.log(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6


-- -- -- -- -- -- -- -- -- -- -- -- -- -

//У нас есть массив объектов:
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];
//Обычно сортировка по нужному полю происходит так:

// по полю name (Вася, Маша, Петя)
// users.sort(function(a, b) {
//   return a.name > b.name ? 1 : -1;
// });

// // по полю age  (Маша, Вася, Петя)
// users.sort(function(a, b) {
//   return a.age > b.age ? 1 : -1;
// });
//Мы хотели бы упростить синтаксис до одной строки, вот так:

users.sort(byField('name'));
users.forEach(function(user) {
    alert(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    alert(user.name);
}); // Маша, Вася, Петя
// То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

// Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, 
// чтобы пример выше заработал.

// function byField(field, a, b) {

//         return a.field > b.field ? 1 : -1; 
// }
//підглянув трішки. було незрозуміло як в sort це все скласти, оскільки там 2 аргументи приймається
function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

//Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            alert(i); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
// Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько 
// вариантов исправления.

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        // console.log(i);
        console.log(i);
        //заглянув в розвязок в три запропонованих варіанти
        var shooter = (function(x) {
            return function() {
                alert(x);
            };
        })(i);
        //console.log(shooter);
        shooters.push(shooter);
    }
    console.log(shooters);
    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...