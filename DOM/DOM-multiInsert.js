Вставьте элементы в конец списка
// важность: 5
// Напишите код для вставки текста html в конец списка ul с использованием метода insertAdjacentHTML. 
// Такая вставка, в отличие от присвоения innerHTML+=, не будет перезаписывать текущее содержимое.

// Добавьте к списку ниже элементы <li>3</li><li>4</li><li>5</li>:

// <ul>
//   <li>1</li>
//   <li>2</li>
// </ul>

var ul = document.body.children[0];
//console.log(ul.childlNodes.lastChild);
ul.lastElementChild.insertAdjacentHTML("afterEnd", "<li>3</li><li>4</li><li>5</li>");

//виявляється я писав непотрібний код)

// var ul = document.body.children[0];
// ul.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -

Отсортировать таблицу
// важность: 5
// Есть таблица:

// Имя	Фамилия	Отчество	Возраст
// Вася	Петров	Александрович	10
// Петя	Иванов	Петрович	15
// Владимир	Ленин	Ильич	9
// ...	...	...	...
// Строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.

// Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.

// Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице 10000 строк (бывает и такое)?

// P.S. Может ли здесь помочь DocumentFragment?

// P.P.S. Если предположить, что у нас заранее есть массив данных для таблицы в JavaScript – что быстрее: 
// отсортировать эту таблицу или сгенерировать новую?

//взяв у них
function makeTable() {
    var tableHolder = document.getElementById('table-holder');

    var contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';
    contents += '<tbody>';
    for (var i = 0; i < 100; i++) {
        contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
    }
    contents += '</tbody>';

    tableHolder.innerHTML = '<table>' + contents + '</table>';
}
makeTable();

//нижче реалізував свій варіант сортування(як на мене - це бульбашка)
//навіть неозброєним оком видно що він затратний, я це розумів, але авдяки цьому лишній раз попрактикувався
//у роботі з вузлами
function compareTable(th) {
    var parametr;
    if (th == "Фамилия") {
        parametr = 1;
    } else if (th == "Отчество") {
        parametr = 2;
    } else if (th == "Возраст") {
        parametr = 3;
    }
    //var tableBody = document.getElementById('table-holder').children[0].children[1];
    //мучився тут з  цим нулем ззаді. це тому що повертається колекція з одним елементом????
    //а в середині уже вузол
    var tableBody = document.getElementsByTagName('tbody')[0];
    // console.log(tableBody);
    console.log(parametr);
    for (var i = 0; i < tableBody.children.length; i++) {


        console.log(tableBody.children[i].children[parametr]);
        for (var k = i; k < tableBody.children.length; k++) {
            var one = +tableBody.children[i].children[parametr].textContent;
            var two = +tableBody.children[k].children[parametr].textContent;
            if (one >= two) {
                continue;
            } else {
                tableBody.children[i].before(tableBody.children[k]);

            }
        }
    }
}

compareTable("Возраст");

//варіант з розвязку. набагато коротший
function sort2() {
    //багато часу пішло у мене на цей нуль ззаді(
    var tbody = document.getElementsByTagName('tbody')[0];
    var rows = [];

    for (var i = 0; i < tbody.children.length; i++) {
        rows.push(tbody.children[i]);
    }

    rows.sort(function(a, b) {
        //бачу цей метод дуже часто використовується, а я майже до нього не звертаюсь
        console.log(a.lastChild.innerHTML);
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
    })

    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

}
//sort2();
//     </script>

// </body>

// </html>