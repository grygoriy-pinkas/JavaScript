Массив: перебирающие методы
    // Перепишите цикл через map
    // важность: 5
    // Код ниже получает из массива строк новый массив, содержащий их длины:
    // var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

// alert( arrLength ); // 4,5,2,5
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(world) {
    return world.length;
});
console.log(arrLength); // 4,5,2,5
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
Массив частичных сумм
// важность: 2
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором
//  на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
//Функция не должна модифицировать входной массив.

arr = [1, 2, 3, 4, 5];
var newArr = [];

function getSums(arr) {
    var newArr = [];
    arr.reduce(function(curentValue, item, i, arr) {

        curentValue = curentValue + item;
        newArr.push(curentValue);
        //newArr[i] = curentValue;
        //намучився з наступною строчкою. тут важливо що має вертати callback
        //return newArr;
        //return curentValue + item; 
        //newArr.push(curentValue);
        return curentValue;
    }, 0)
    return newArr;
}
//console.log(typeof newArr);
//поглянув в розвязок і вийшло що в мене коротший код ніж на сайті, і працює аналогічно, 
//а припередаванні пустого масиву, його ж вертає
console.log(getSums(arr));
console.log(getSums([1, 2, 3, 4, 5, 6, 7])); // 1,3,6,10,15,21,28
console.log(getSums([-2, -1, 0, 1])); // -2,-3,-3,-2
console.log(getSums([])); // []

Псевдомассив аргументов "arguments"

// Проверка на аргумент - undefined
// важность: 5
// Как в функции отличить отсутствующий аргумент от undefined ?
// function f(x) {
//     // ..ваш код..
//     // выведите 1, если первый аргумент есть, и 0 - если нет
//   }

//   f(undefined); // 1
//   f(); // 0

function f(x) {
    //console.log(arguments[0]);
    if (arguments.length != 0) {
        //console.log(1);
        return 1;
    } else {
        // console.log(0);
        return 0;
    }
}

f(undefined); // 1
f(); // 0
-- -- -- -- -- -- -- -- -- -- -- --
Сумма аргументов
// важность: 5
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

function sum() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    if (arguments.length != 0) {
        return args.reduce(function(sum, curent) {
            return sum + curent;
        });
    } else {
        return 0;
    }
}
sum(54, 46, 1);
sum();
alert(sum()); // 0
alert(sum(1)); // 1
alert(sum(1, 2)); // 3
alert(sum(1, 2, 3)); // 6
alert(sum(1, 2, 3, 4)); // 10

Дата и Время

// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная. Выведите его на экран.

var date = new Date(2012, 02, 20, 03, 12, 00);
var date1 = Date.parse("2012-02-20T03:12:00");

console.log(date);
console.log(date1);
____________
// Имя дня недели
// важность: 5
// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, 
// … „вс“.
var date = Date.now();
//console.log(date);
//?????????????????????????????
//не прцює чомусь
console.log(date.getDate());
//?????????????????????????????????????

function getWeekDay(date) {
    console.log(date);
    var a = date.getDay();
    return a;
}
console.log(getWeekDay(date));
-- -- //а це код з сайту - працює
function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

var date = new Date(2014, 0, 3); // 3 января 2014
alert(getWeekDay(date)); // 'пт'
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//   День указанное количество дней назад
//   важность: 4
//   Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад
//   от даты date.

function getDateAgo(date, days) {
    var d = new Date(date);
    d.setDate(d.getDate() - days);
    console.log();
    return d.getDate();

}
//var date = new Date();
//?????????????????????
//не працює????????????
//var date = Date.now();
//Uncaught TypeError: date.getDate is not a function
//????????????????
var date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)
-- -- -- -- -- -- -- -- -- --

// Последний день месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

// Параметры:

// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth(year, month) {
    var day
    if (month != 12) {
        month = month + 1;
        var date = new Date(year + "-" + month);
        //console.log(date);
        date.setDate(date.getDate() - 1);
        return date.getDate();
    } else {
        return date = 31;
    }

}

console.log(getLastDayOfMonth(2012, 1));

//Сколько секунд уже прошло сегодня?
// важность: 5
// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
// + 
// Сколько секунд - до завтра?
// важность: 5
// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
//додав до цієї функції
//зробив по своїй фантазії- в обєкт записав і минулі і майбутні секунди поточного дня.
function getSecondsToday() {
    var now = new Date();
    var today = now.toISOString();
    var strtoday = today.substr(0, 10);
    strtoday = Date.parse(strtoday);
    var pastSecondToday = parseInt((now - strtoday) / 1000);
    var futureSecondToday = 86400 - pastSecondToday;

    var secondToday = {};
    secondToday.past = pastSecondToday;
    secondToday.future = futureSecondToday;

    return secondToday;
}

getSecondsToday();
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// Вывести дату в формате дд.мм.гг
// важность: 3
// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

// Например:

// var d = new Date(2014, 0, 30); // 30 января 2014
// alert( formatDate(d) ); // '30.01.14'
// P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01,
// а не 1.1.1.

function formatDate(d) {
    var str = d.toISOString();
    //     var date = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear()
    var date = str.substr(8, 2) + '.' + str.substr(5, 2) + '.' + str.substr(2, 2);
    console.log(date);
    console.log(str);
}

var d = new Date(2014, 0, 30);

console.log(formatDate(d));

// Относительное форматирование даты
// важность: 4
// Напишите функцию formatDate(date), которая форматирует дату date так:

// Если со времени date прошло менее секунды, то возвращает "только что".
// Иначе если со времени date прошло менее минуты, то "n сек. назад".
// Иначе если прошло меньше часа, то "m мин. назад".
// Иначе полная дата в формате "дд.мм.гг чч:мм".

// function format(d) {
//     var str = d.toISOString();
//     //     var date = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear()
//     var date = str.substr(8, 2) + '.' + str.substr(5, 2) + '.' + str.substr(2, 2);
//     console.log(date);
//     console.log(str);
// }

function formatDate(date) {
    date = new Date(date);

    var now = Date.now();
    var up;
    var res = now - date;
    if (res < 1000) {
        up = "тільки що";
    } else if (res < 1000 * 60) {
        up = res / 1000 + " секунд тому";
    } else if (res < 1000 * 3600) {
        up = res / 60000 + " хвилин тому";
    } else {
        //var a = date.getTime();
        //var a = Date.parse(date);
        //???????????????????????????????????????????????????????????
        //не працює тут це ISO тому формат який просять не виходить
        // навіть функція яка вище написана теж не працює
        //Uncaught TypeError: up.toISOString is not a function
        //?????????????????????????????
        // up = a.toISOString();
        //console.log(a);
        up = date;
    }
    //console.log(res);
    return up;
}

formatDate();

console.log(formatDate(new Date(new Date - 1))); // "только что"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000)));

uhbujhsq88