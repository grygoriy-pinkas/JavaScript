DOM children
// важность: 5

// Напишите код, который получит элемент HEAD.
// Напишите код, который получит UL.
// Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между 
// элементами LI?

// <!DOCTYPE HTML>
// <html>

// <head>
//   <meta charset="utf-8">
// </head>

// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Маша</li>
//     <li>Вовочка</li>
//   </ul>

//   <!-- комментарий -->

//   <script>
//     // ... ваш код
//   </script>

// </body>

// </html>

//1
console.log(document.head);

//2
//так не можна робити???
//  var collection  = document.body.children;
// for (var i = 0; i < collection.length; i++) {
//       if(document.body.children[i] == 'ul')
//       console.log(document.body.children[i]);
//     } 
console.log(document.body.children[1]);

//3
//так не працює(((
//console.log(document.body.children[1].lastChild);

console.log(document.body.children[1].children[1]);

//ая думав з коментами працюватиме

-- -- -- -- -- -- -- -- -- -- -

Проверка существования детей
важность: 5
    // Придумайте самый короткий код для проверки, пуст ли элемент elem.

// «Пустой» – значит нет дочерних узлов, даже текстовых.

// if (/*...ваш код проверки elem... */) { узел elem пуст }
// Что написать в условии if ?

//я спочатку так зробив
// if (elem.children == null) { узел elem пуст }
if (elem.childNodes.length == null) { узел elem пуст }


if (!elem.childNodes.length) {... }


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


Напишите код, который выделит все ячейки в таблице по диагонали.

// Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

// // в переменной td DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
var table = document.body.children[0];

table.rows[].style.backgroundColor = 'red';


//з експерементів -  чому такий таймаут не працює????
// for (let index = 0; index < table.rows.length; index++) {
//     setTimeout(() => {
//         table.rows[index - 1].style.backgroundColor = '';
//         table.rows[index].style.backgroundColor = 'red';
//     }, 1000);
// }

//проба на роботоздатність
//table.rows[3].cells[2].style.backgroundColor = 'red';


for (let index = 0; index < table.rows.length; index++) {
    table.rows[index].cells[index].style.backgroundColor = 'red';
}