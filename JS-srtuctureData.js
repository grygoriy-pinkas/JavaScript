Числа
//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
var sum = function() {
    var a = +prompt("Enter first number", "");
    var b = +prompt("Enter second number", "");
    return 
}

sum();

//Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
//P.S. Постарайтесь не использовать toFixed
function getDecimal(num) {
    var res = num - Math.floor(num);
    
    return Math.round(res * 100000) / 100000;
}


???????????????????
//в відповідях був варіант розвязку про роботу з числми як з строками, хоча строкових функцій ще не проходили)
?????????????????????

// Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.

// Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу. Проверьте её для значения F77 (должно получиться fibBinet(77) = 5527939700884757).

// Одинаковы ли результаты, полученные при помощи кода fib(n) выше и по формуле Бине? Если нет, то почему и какой из них верный?

function fibBinet(n){
    var goldenSplit = (1 + Math.sqrt(5)) / 2;
    var fi = Math.pow(goldenSplit, n)/Math.sqrt(5);
    var F = fi.toFixed(0);
    return F;
}
console.log(fibBinet(77));
// Результат вычисления F77 получился неверным!

// Причина – в ошибках округления, ведь √5 – бесконечная дробь.

// Ошибки округления при вычислениях множатся и, в итоге, дают расхождение.
------------------------------
//Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
function random(max){
    var index = Math.random();
    return res = index * max;
}

console.log(random(56));
console.log(random(100));
//Напишите код для генерации случайного числа от min до max, не включая max.
function random1(min, max){
    var index = Math.random();
    var res = (max - min) * index + min;
    return res;
}
console.log(random1(23, 46));
console.log(random1(1, 100));
//Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max 
//как возможные значения.
//Любое число из интервала min..max должно иметь одинаковую вероятность.
function randomInteger(min, max){
    var index = Math.random();
    var res = (max - min) * index + min;
    return res.toFixed(0);
}
console.log(randomInteger(23, 46));
console.log(randomInteger(1, 100));
?????????????????????????????????????????????????????
Любое число из интервала min..max должно иметь одинаковую вероятность.
якщо округлення до 5 йде від 4,5 до 5,4 то до 0 тільки від 0 до 0,4 також мах буде мати тільки пів одиниці
для заокруглення до максимального числа, а отже з математичної точки зору шанси нерівні для крайніх випадків порівняно
всіма іншими проміжними випадками. це суперечить умові. ПРАВИЛЬНО Я ТРАКТУЮ УМОВУ? ТРЕБА ЩОСЬ ДОРОБЛЯТИ? в відповідь
на даний момент не дивився
???????????????????????????????????????????????

Строки

//В JavaScript нет разницы между двойными и одинарными кавычками.

//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
function ucFirst(str){
    var res;
    return res = str.charAt(0).toUpperCase() + str.slice(1);
}

ucFirst("hungary");
ucFirst("work");

//Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false
function checkSpam(str){
    if(str.toLowerCase().indexOf("xxx") != -1 || str.toLowerCase().indexOf("viagra") != -1){
        return true;
    }
    return false;
}
console.log(checkSpam("bsviagRasmfn"));
console.log(checkSpam("XxXl,sks"));

//інший варіант
function checkSpam(str){
    str = str.toLowerCase();
    if(~str.indexOf("xxx") || ~str.indexOf("viagra")){
        return true;
    }
    return false;
}
console.log(checkSpam("bsviagRasmfn"));
console.log(checkSpam("XxXl,sks"));
console.log(checkSpam("XXl,sks"));

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
//Результатом функции должна быть (при необходимости) усечённая строка.
function truncate(str, maxlength){
    if(str.length > maxlength){
        var str = str.slice(0, maxlength - 3) + "...";
    }
    return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Эта функция имеет применение в жизни.", 50));
//Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
function extractCurrencyValue(str){
    str = str.slice(1);
    return str;
}

console.log(extractCurrencyValue("$243"));
console.log(typeof(extractCurrencyValue("$243")));
console.log(extractCurrencyValue("$0,632"));
console.log(typeof(extractCurrencyValue("$0,632")));