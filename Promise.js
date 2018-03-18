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
            setTimeout(resolve, ms);
        })
    }

delay(3000)
    //$1
    .then(() => alert("Hello!"));

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



//сам  не зміг це вирішити

let urls = [
    'https://httpbin.org/ip',
    'https://httpbin.org/user-agent'
];

function httpGet(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}
var results = [];
//це приклад з коментів з reduce

urls
    .reduce((chain, current) => chain
        //не розумію що тут "x" означає
        .then(() => httpGet(current))
        .then(x => results.push(x)),
        Promise.resolve())
    //тут викликається then на результат reduse????????
    .then(x => alert(results));
//але тут в результаті помилка Uncaught (in promise) ReferenceError: results is not defined

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


// resolving from site
//виявляється пустий вирішений проміс можна записати в змінну

let urls = [
    'https://httpbin.org/ip',
    'https://httpbin.org/user-agent'
];

function httpGet(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

let chain = Promise.resolve();

let results = [];

// в цикле добавляем задачи в цепочку
urls.forEach(function(url) {
    chain = chain
        .then(() => httpGet(url))
        .then((result) => {
            results.push(result);
        });
});

// в конце — выводим результаты
chain.then(() => {
    alert(results);
});