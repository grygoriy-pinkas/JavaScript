// Скрипт с коллбэком
// важность: 4
// Создайте функцию addScript(src, callback), которая загружает скрипт с данным src, и после его 
// загрузки и выполнения вызывает функцию callback.

// Скрипт может быть любым, работа функции не должна зависеть от его содержимого.

// Ошибки загрузки обрабатывать не нужно.

function addScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;

    document.body.appendChild(script);

    script.onload = function() {
        callback();
    }
}

addScript("go.js", function() {
    go();
});