Promise

// Промисифицировать setTimeout
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

// Пример использования:

// delay(1000)
//   .then(() => alert("Hello!"));

// Такая функция полезна для использования в других промис-цепочках.

// Вот такой вызов:

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     doSomeThing();
//     resolve();
//   }, ms)
// });
// Станет возможным переписать так:

// return delay(ms).then(doSomething);
    ==

    function delay(ms) {

        return new Promise(function(resolve, reject) {
            //в рядку нижче ()=>{} це анонімна функція?????
            //і через стрілку вона не має свого контексту????????????????????
            setTimeout(() => {
                //цей resolve викликається для успішного закінчення виконання без аргументів
                //якщо було б resolve('result') то в рядку $1 було б result => alert("Hello!")??????????????????
                resolve();
            }, ms)
        })
    }


delay(1000)
    //$1
    .then(() => alert("Hello!"));
//в розвязку resolve не обгортали в анонім
-- -- -- -- -- -- -- -


Загрузить массив последовательно
// Есть массив URL:

//  'use strict';

// let urls = [
//   'user.json',
//   'guest.json'
// ];
// Напишите код, который все URL из этого массива загружает – один за другим (последовательно), и сохраняет в
// результаты в массиве results, а потом выводит.

// Вариант с параллельной загрузкой выглядел бы так:

// Promise.all( urls.map(httpGet) )
//   .then(alert);
// В этой задаче загрузку нужно реализовать последовательно.

let urls = [
    'user.json',
    'guest.json'
];

var result = [];

//тут я явно до кінця не розумію як це має відбуватись.
var proces = new Promise((resolve, reject) => {
    return result = urls.reduce((curent, item, i) => {
        result.push[item];
    }, 0);
})
proces.then(console.log(result));


// в коментах побачив код з визовом .then
//після звичайної функції, таке можливо?