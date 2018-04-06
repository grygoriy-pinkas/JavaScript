// Загрузка видимых изображений
// важность: 4

// При начальной загрузке некоторые изображения должны быть видны сразу, до прокрутки. Код должен 
// это учитывать.
// Некоторые изображения могут быть обычными, без realsrc. Их код не должен трогать вообще.
// Также код не должен перегружать уже показанное изображение.
// Желательно предусмотреть загрузку изображений не только видимых сейчас, но и на страницу вперед 
// и назад от текущего места.
// P.S. Горизонтальной прокрутки нет.



var refers = document.getElementsByTagName('img');
//добавив для візуалізації, але здається що зхагружає всі остальні картинки всі разом
var render = 400;
//console.log(refers);
for (let i = 0; i < refers.length; i++) {
    if (parseInt(refers[i].getBoundingClientRect().top) + window.pageYOffset < window.pageYOffset + document.documentElement.clientHeight) {
        // console.log(parseInt(refers[i].getBoundingClientRect().top));
        var attr = refers[i].getAttribute('realsrc');
        // console.log(refers[i].getAttribute('realsrc'));
        refers[i].setAttribute('src', attr);
    }
}

document.onscroll = function(e) {
    for (let i = 0; i < refers.length; i++) {
        if (parseInt(refers[i].getBoundingClientRect().top) + window.pageYOffset > window.pageYOffset + document.documentElement.clientHeight - render) {
            // console.log(parseInt(refers[i].getBoundingClientRect().top));
            var attr = refers[i].getAttribute('realsrc');
            // console.log(refers[i].getAttribute('realsrc'));
            refers[i].setAttribute('src', attr);
        }
    }
}

//getBoundingClientRect()