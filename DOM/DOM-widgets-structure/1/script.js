// Часики
// важность: 5
// Создайте компонент «Часы» (Clock).


// Остальные методы, если нужны, должны быть приватными.

// При нажатии на alert часы должны приостанавливаться, а затем продолжать идти с 
// правильным временем.

function Clock(options) {
    var interval;
    var elem = options.elem;

    function start() {
        interval = setInterval(() => {
            getDateNumbers(elem);
        }, 1000);
    }

    function stop() {
        clearInterval(interval);
    }

    this.start = start;
    this.stop = stop;
}

function getDateNumbers(elem) {
    let time = new Date();
    let hours = document.getElementsByClassName('hours')[0];
    let min = document.getElementsByClassName('min')[0];
    let sec = document.getElementsByClassName('sec')[0];
    if (time.getHours() < 10) {
        hours.textContent = '0' + time.getHours();
    } else {
        hours.textContent = time.getHours();
    }
    if (time.getMinutes() < 10) {
        min.textContent = '0' + time.getMinutes();
    } else {
        min.textContent = time.getMinutes();
    }
    if (time.getSeconds() < 10) {
        sec.textContent = '0' + time.getSeconds();
    } else {
        sec.textContent = time.getSeconds();
    }
}
var pageClock = new Clock({
    elem: document.getElementById('clock')
});