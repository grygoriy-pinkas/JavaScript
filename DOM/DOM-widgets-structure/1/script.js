// Часики
// важность: 5
// Создайте компонент «Часы» (Clock).


// Остальные методы, если нужны, должны быть приватными.

// При нажатии на alert часы должны приостанавливаться, а затем продолжать идти с 
// правильным временем.

function Clock(options) {
    var interval;
    var elem = options.elem;
    console.log(elem.children);

    function start() {
        interval = setInterval(() => {
            getDateNumbers(elem);
        }, 1000);
    }

    function stop() {
        clearInterval(interval);
    }
    //прокоментуй цю строчку, а то я розумію що вона має бути, але точне значення  далеке.(тобто
    //не розумію чому в обєкті конструкторі функцію не видно відразу, а потрібно присвоїти
    //як властивість. може я таке уже читав і питав, але зараз неможу собі дати відповідь на 
    //питання так щоб мене задовільнило)
    this.start = start;
    this.stop = stop;
}

function getDateNumbers(elem) {
    let time = new Date();
    if (time.getHours() < 10) {
        elem.children[2].textContent = '0' + time.getHours();
    } else {
        elem.children[0].textContent = time.getHours();
    }
    if (time.getMinutes() < 10) {
        elem.children[2].textContent = '0' + time.getMinutes();
    } else {
        elem.children[1].textContent = time.getMinutes();
    }
    if (time.getSeconds() < 10) {
        elem.children[2].textContent = '0' + time.getSeconds();
    } else {
        elem.children[2].textContent = time.getSeconds();
    }
}
var pageClock = new Clock({
    elem: document.getElementById('clock')
});