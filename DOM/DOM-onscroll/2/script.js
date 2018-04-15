// Кнопка вверх-вниз
// важность: 3
// Создайте кнопку навигации, которая помогает при прокрутке страницы.

// Работать должна следующим образом:

// Пока страница промотана меньше чем на высоту экрана вниз – кнопка не видна.
// При промотке страницы вниз больше, чем на высоту экрана, появляется кнопка «стрелка вверх».
// При нажатии на нее страница прыгает вверх, но не только. Дополнительно, кнопка меняется на 
// «стрелка вниз» и при клике возвратит на старое место. Если же в этом состоянии посетитель сам 
// прокрутит вниз больше, чем один экран, то она вновь изменится на «стрелка вверх».
// Должен получиться удобный навигационный помощник.

//top.getAttributes('hidden');
//console.log(bott.getAttribute('hidden'));
// console.log('sahfg');
// console.log(window.pageYOffset > document.documentElement.clientHeight);
// console.log(window.pageYOffset);
// console.log(document.documentElement.clientHeight);

var point = 0;

document.onscroll = function(e) {
    if (window.pageYOffset > document.documentElement.clientHeight) {
        // console.log(window.pageYOffset);
        topEl.style.visibility = 'hidden';
        bottEl.style.visibility = 'visible';
        bottEl.onclick = function(e) {
            point = window.pageYOffset;
            console.log(point);
            window.scrollTo(0, 0);
        }

    } else {
        topEl.style.visibility = 'visible';
        bottEl.style.visibility = 'hidden';
        topEl.onclick = function(e) {
            console.log("gf");
            console.log(point);
            window.scrollTo(0, point);
        }
    }
}