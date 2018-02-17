Объекты как ассоциативные массивы

Объекты: перебор свойств

//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
function isEmpty(obj) {
    var counter = 0;
    for (var key in obj) {
        counter++;
    }
    if (counter) {
        return false
    } else {
        return true;
    }
}

var schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "подъём";

alert(isEmpty(schedule));
-------------------------------------------------------
//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
//Если объект пустой, то результат должен быть 0.

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function fondSalaries(obj) {
    var sum = 0
    for (var key in obj) {
        sum = sum + obj[key];
    }
    return sum;
}

fondSalaries(salaries);
-----------------------------------------------------
//Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//Если объект пустой, то пусть он выводит «нет сотрудников».
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function maxSalary(obj) {
    var max = 0;
    var name = "";
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            name = key;
        }
    }
    var res = (name) ? name : "No one";
    return res;
}

console.log(maxSalary(salaries));
-------------------------------------------------
//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
//взята з підручника
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(object) {
    for (var key in object) {
        if (isNumeric(object[key]))
            object[key] = object[key] * 2;
    }
    return object;
}

console.log(multiplyNumeric(menu));

Объекты: передача по ссылке
    //Фундаментальным отличием объектов от примитивов, является их хранение и копирование «по ссылке».
    //В переменной, которой присвоен объект, хранится не сам объект, а «адрес его места в памяти»,
    //иными словами – «ссылка» на него.
    //При копировании переменной с объектом – копируется эта ссылка, 
    //а объект по-прежнему остается в единственном экземпляре.
    //Так как объект всего один, то изменения через любую переменную видны в других переменных:
    ////При «раскрытии» свойств объекта в консоли – браузер всегда выводит их текущие (на момент раскрытия) значения.
--------------------------------------------

Массивы с числовыми индексами

//Как получить последний элемент из произвольного массива?
//У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
//Напишите код для получения последнего элемента goods.
goods = [1, 34, 64, 23, 75];
lastElement = goods[goods.length - 1];

console.log(lastElement);

----------------------------------------------
//Как добавить элемент в конец произвольного массива?
//У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
goods = [1, 34, 64, 23, 75];

function addEL(object, el) {
    object.push(el);
    return object;
}

console.log(addEL(goods, "Computer"));
---------------------------------------------------------
//Задача из 5 шагов-строк:

//Создайте массив styles с элементами «Джаз», «Блюз».
//Добавьте в конец значение «Рок-н-Ролл»
//Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
//Удалите первое значение массива и выведите его alert.
//Добавьте в начало значения «Рэп» и «Регги».
styles = ["Jaz", "Bluse"];
styles.push("Rock-n-Roll");
styles[styles.length - 2] = "Classic";
alert(styles.shift(0));
styles.unshift("Rap", "Reggi");
console.log(styles);
---------------------------------------------------------
//Напишите код, который:
//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
//При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//Выводит сумму всех значений массива

//не робочий варіант для демонстрації що не підглядаю до того як запрацює
//- трохи помучився з цим завданням,
//нижче є робочий

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumArr() {
    var arr = [];
    var sum = 0;
    do {
        var a = prompt("Enter somthing", "");
        arr.push(+a);
        sum = sum + a;
    } while (isNumeric(a) || a != "" || a == true);
    console.log(arr);
    return sum;
}
sumArr();
console.log(sumArr());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//не робочий варіант
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumArr() {
    var arr = [];
    var sum = 0;
    while (true) {
        var a = +prompt("Enter somthing", "");
        if (!isNumeric(a) || a == "") {
            break here;
        } else if (a == 0) {
            sum = sum + a;
        } else {
            sum = sum + a;
        }
    }
    here: return sum;
}
console.log(sumArr());
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//робочий варіант
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var arr = [];
var sum = 0;
do {
    var a = prompt("Enter somthing", "");
    console.log(a);
    if (isNumeric(a)) {
        console.log(typeof a);
        arr.push(+a);
        a = +a;
        sum = sum + a;

    }

} while (isNumeric(a));
console.log(arr);
console.log(sum);
-- -- -- -- -- -- -- -- -- -- -- -
//перевіряв шо вийде коли promt пусту строку верне
console.log(+null);
-- -- -- -- -- -- -- -- -- -- -- -- --

//Напишите код для вывода alert случайного значения из массива:
//дали код для рандомного числа в діапазоні(а я так хотів його написати)
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var max = arr.length - 1;
var min = 0;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
console.log(arr[rand]);
----------------------------------------------------------

//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, 
//если найдено, или -1, если не найдено.

arr = ["test", 2, 1.5, false];

function find(arr, value) {
    var log = false;
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            log = true;
            num = i;
        }
    }
    if (log) {
        return num;
    } else {
        return -1;
    }

}

console.log(find(arr, 2));
console.log(find(arr, "sfs"));
-----------------------------------------------------
//Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает
// новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет 
//вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
arr = [24, 543, 3, 5, 7, 54, 23, 23, 23, 44, 75, 3];

function filterRange(arr, a, b) {
    var arr2 = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (a <= i && b >= i) {
            arr2[count] = arr[i];

            count++;
        }
    }
    return arr2;
}

console.log(filterRange(arr, 3, 5));
console.log(filterRange(arr, 2, 7));
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//Решето Эратосфена
//Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
//Найдите все простые числа до 100 и выведите их сумму.

function eratosfen(max) {
    //create array with defined parameters
    var arr = [];
    var min = 2;
    var count = 0;
    var sum = 0;
    for (var i = min; i <= max; i++) {
        arr[count] = i;
        count++;
    }
    //console.log(arr);
    var line = "---------------------------";
    console.log(line);
    //try next pitch
    //slice do not learn yet, becouse we will not use it

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != undefined) {
            min = arr[j];

            for (var i = j; i < arr.length; i++) {
                if (arr[i] != min && arr[i] % min == 0 && arr[i] != undefined) {
                    arr[i] = undefined;
                }
            }
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != undefined) {
            sum = sum + arr[j];
        }

    }
    return sum;
}

console.log(eratosfen(100));

---------------------------------------------------------------
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
// Ваша функция должна возвращать только эту сумму.
//Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.
function getMaxSubSum(arr) {
    var sum = 0;
    var sumThis = 0;
    var res = 0;
    for (var i = 0; i < arr.length; i++) {

        res = 0;
        for (var j = i; j < arr.length; j++) {

            //console.log(arr[j]);
            res = res + arr[j];
            console.log(res);
            // console.log(typeof res);
            if (res > sumThis) {
                sumThis = res;
            }
            // console.log(sumThis);
            console.log("--------------");
        }
        if (sum < sumThis) {
            sum = sumThis;
        }
    }
    return sum;
}
console.log("--------------");
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log("--------------");
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log("--------------");
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log("--------------");
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log("--------------");
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log("--------------");
console.log(getMaxSubSum([1, 2, 3]));
console.log("--------------");
--------------------------------------------------
Массивы: методы

//В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

//P.S. «Альтернативный» подход к проверке наличия класса вызовом obj.className.indexOf(cls) был бы неверным. 
//В частности, он найдёт cls = "menu" в строке классов obj.className = "open mymenu".

//виходить - я неправильно зробив. тобто а певних умов пошук видав би неправильні результати
var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    //console.log(arr);
    //console.log(arr.indexOf(cls));
    if (arr.indexOf(cls) == -1) {
        //????????????????????????????????????????????????????
        //підступний пуш. він же ш вертає довжину масиву. а я його присвоював в масив))
        arr.push(cls);
        //console.log(typeof(arr));
        //console.log(arr);
        obj.className = arr.join(' ');
        return obj;

    } else {
        return obj;
    }

}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className); // "open menu new me"

-- -- -- ----------------------
// Перевести текст вида border-left-width в borderLeftWidth
// важность: 3
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    str = str.split('-');
    for (var i = 1; i < str.length; i++) {
        str[i] = str[i].toUpperCase().charAt(0) + str[i].substring(1);
        // console.log(str);
    }
    str = str.join('');
    return str;
}

console.log(camelize("background-color"));
// == 'backgroundColor';
console.log(camelize("list-style-image"));
//== 'listStyleImage';
console.log(camelize("-webkit-transition"));
// == 'WebkitTransition';
------------------------------------------------
//у объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
//Лишних пробелов после функции образовываться не должно.
//?????????????????????????????????????????????????
//в роззвязку інше рішення, незнаю чи моє відповідатиме умовам задачі.
//??????????????????????????????????????????
obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    console.log(arr);
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == cls) {
            delete arr[i];
        }
    }
    obj.className = arr.join(' ');
    return obj;
}


removeClass(obj, 'menu');
console.log(obj.className); // 'my'

-- -- -- -- -- -- -- -- -- -- -- -- -- -
//Фильтрация массива "на месте"
важность: 4
    //Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr 
    //и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 
    //Функция должна менять сам массив и ничего не возвращать.
    // ? ? ? ? ? ? ? ? ?
    //тобто вертає змінений масив?
    //? ? ? ? ? ? ? ?
arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        if (a < arr[i] || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
------------------------------------------
//Как отсортировать массив чисел в обратном порядке?
//важность: 5

var arr = [5, 2, 1, -10, 8];
//?????????????????????????
//свиснув в них функцію compareNumeric з прикладу, а потім в відповіді побачив як коротше(b-a)
//??????????????????????????????/
function compareNumeric(a, b) {
    return a - b;
}

arr = arr.reverse(arr.sort(compareNumeric));

console.log(arr);
----------------------------------------
// Скопировать и отсортировать массив
// важность: 5
// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted;

for (i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];
}
arrSorted.sort();

alert(arrSorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
----------------------------------------
// Случайный порядок в массиве
// важность: 3
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
var arr = [1, 2, 3, 4, 5];

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function rand(a, b) {
    a = getRandom(50, 100) + a;
    b = getRandom(50, 100) + b;
    if (a > b) return 1;
    if (a < b) return -1;
    //console.log(a);
    //console.log(b);
}

arr.sort(rand);
console.log(arr);
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Сортировка объектов
// важность: 5
// Напишите код, который отсортирует массив объектов people по полю age.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];

function sortAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    //console.log(a.age);
    //console.log(b.age);
}

// function sortAge(a, b) {
//     a.age - b.age
//     //console.log(a.age);
//     //console.log(b.age);
// }

people = people.sort(sortAge);

console.log(people);
console.log(people[0].age) // 6
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    Вывести односвязный список

// Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
// Напишите функцию printList(list) при помощи рекурсии.
// Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. 
//Для списка выше она должна выводить 4,3,2,1
// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
// Как лучше – с рекурсией или без?

//loop
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };


function printList(list) {
    do {
        console.log(list.value);
        list = list.next;
    } while (list)
}

printList(list);
----------------------------------------
//recurtion 

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printList(list) {
    console.log(list.value);
    //рішення для коректного виведення останнього значення в списку
    if (list.next) 
    printList(list.next);
}

printList(list);
------------------------------------
// reverce recurtion
//поглянув на розвязок - довго  ніякі ідеї неприходили
//тут дійсно треба було помислити творчо і поекспериментувати на відміну від рукурсивного виводу в циклі
//
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert( list.value );
  }
  
  printReverseList(list);
-------------------------------------
//reverce loop
//сам не зміг. підглянув
//а там сюрприз(хоча будь-яке рішення яке призводить до результату - це теж рішення!!!!)
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };


  function printReverseList(list) {
    var arr = [];
    var tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  //я то думав перебор обєктів побудований на доставанні з глибини, а тут прохід по масиву з кінця застосовується))))
  //я думав - є коротший шлях
    for (var i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }
  
  printReverseList(list);
--------------------------------------------
Отфильтровать анаграммы

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

//console.log(aclean(arr)); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

//P.S. довго мучився)
//мабуть можна скоротити даний приклад. після рецензії - вернусь до нього

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        arr2[i] = [];
        var sum = 0;
        for (var j = 0; j < arr[i].length; j++) {
            arr2[i][j] = arr[i].charAt(j).toLowerCase();
            arr2[i][j] = arr2[i][j].charCodeAt(0);
        }
        var sum = 0;
        for (var k = 0; k < arr2[i].length; k++) {

            sum = sum + arr2[i][k];
        }
        arr2[i] = sum;
    }
    for (var i = 0; i < arr2.length; i++) {
        for (var j = i+1; j < arr2.length; j++) {
           // console.log(arr2[i]);
            //console.log(arr2[j]);
            if (arr2[i] == arr2[j]) {
                arr[j] = undefined;
                //console.log("true");
            } else {
                //console.log("false");
            }
            console.log("_____________________");
        }
    }
    for (var i = arr.length; i >= 0 ; i--) {
        if(arr[i] == undefined) {
            arr.splice(i, 1);
        }
    }
    //console.log(arr2);
    console.log(arr);
}

aclean(arr);
--------------------------------
//Пусть arr – массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if(arr[i] != undefined && arr[i] == arr[j]) {
                arr[j] = undefined;
            }
        }
    }
    for (var i = arr.length; i >= 0 ; i--) {
        if(arr[i] == undefined) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}
alert( unique(strings) );