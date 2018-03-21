Атрибуты и DOM - свойства


Получите пользовательский атрибут
// важность: 5
// Получите div в переменную.
// Получите значение атрибута "data-widget-name" в переменную.
// Выведите его.
// Документ:


/* <body>

  <div id="widget" data-widget-name="menu">Выберите жанр</div>

  <script> */
var elem = document.getElementById('widget');
var data = elem.dataset.widgetName;
alert(data);
//   </script>
// </body>
-- -- -- -- -- -- -- -- -- -- -- -- -

Поставьте класс ссылкам
// важность: 3
// Сделайте желтыми внешние ссылки, добавив им класс external.

// Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

//  <style>
//   .external {
//     background-color: yellow
//   }
// </style>

// <a name="list">список</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>

//тут ще так робив
var list = document.getElementsByTagName('a');

for (let i = 0; i < list.length; i++) {
    let link = list[i].getAttribute('href');

    //  alert(typeof list[i]);
    //  alert(link.indexOf('http://'));

    if (link.indexOf('http://') == -1) {
        continue;
    } else {
        list[i].classList.add('external');
    }
}