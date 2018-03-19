Поиск элементов
// важность: 4
// Ниже находится документ с таблицей и формой.

// Найдите (получите в переменную) в нём:

// Все элементы label внутри таблицы. Должно быть 3 элемента.
// Первую ячейку таблицы (со словом "Возраст").
// Вторую форму в документе.
// Форму с именем search, без использования её позиции в документе.
// Элемент input в форме с именем search. Если их несколько, то нужен первый.
// Элемент с именем info[0], без точного знания его позиции в документе.
// Элемент с именем info[0], внутри формы с именем search-person.
// Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.

//1
var table = document.getElementById('age-table');
console.log(table.getElementsByTagName('label'));

//2
var table = document.getElementById('age-table');
//поясни коротко чому рядок нижче виводить текст
// console.log(table.firstChild);

console.log(table.rows[0].cells[0]);

//3
var forms = document.getElementsByTagName('form');
console.log(forms[1]);

//4
var form = document.getElementsByName('search')
console.log(form);

//5 підглядів у розвязку пізніше, бо пропустив його
console.log(document.querySelector('form[name = search] input'));

//6
var elem = document.getElementsByName('info[0]')
console.log(elem);

//7 тут теж підглянув бо не розумів як його знайти коли його нема
document.querySelector('form[name="search-person"] [name="info[0]"]');

-- -- -- -- -- -- -- -- -

Дерево
важность: 5
    // Есть дерево из тегов <ul>/<li>.

// Напишите код, который для каждого элемента <li> выведет:

// Текст непосредственно в нём (без подразделов).
// Количество вложенных в него элементов <li> – всех, с учётом вложенных.


//це так я мучився
// var elem = document.body.getElementsByTagName('ul').childNodes;
// alert(elem);

// function render(elem) {
//     [].forEach.call(elem, function(item, i) {
//         if (typeof elem.children[i] == 'text') {
//             alert(elem.children[i]);
//         }
//         if (elem.children[i].firstElementChild != null) {
//             render(elem.children[i].childNodes)
//         }

//     });
// }

//тут підійшов уже близько, але все одно виводить вузол повністю. не знаю як назву вирвати звідти.
//щодо астосування рекурсії - то явпевнений. також пробував застосовувати innerHTML. результат той самий - на 
// найглибших вкладеннях працює коректно, а вище виводить код цілого вузла. до речі про ці методи нічо не 
//було сказано в уроці. мусив вишуковувати
var element = document.body.getElementsByTagName('li');

function render(elem) {
    for (let index = 0; index < elem.length; index++) {
        if (elem[index].firstChild != null) {
            alert(elem[index].textContent[0]);
        } else {
            render(elem.firstChild);
        }
    }
}

render(element);

-- -- -- -- -- -- -- -- -- -- --