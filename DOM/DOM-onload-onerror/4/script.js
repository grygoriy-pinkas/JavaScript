// Скрипты с коллбэком
// важность: 5
// Создайте функцию addScripts(scripts, callback), которая загружает скрипты из массива scripts, и 
// после загрузки и выполнения их всех вызывает функцию callback.

// Скрипт может быть любым, работа функции не должна зависеть от его содержимого.


// Ошибки загрузки обрабатывать не нужно.
// Один скрипт не ждёт другого. Они все загружаются, а по окончании вызывается обработчик callback.

//чомусь воно не працює
function addScripts(arr, callback) {
    var body = document.getElementsByTagName('body')[0];
    var count = 0;

    //нижче редактор підкинув цікавий синтаксис циклу))
    arr.forEach(element => {
        var script = document.createElement('script');
        console.log(element);
        script.src = element;
        body.appendChild(script);
        count++;
        script.onload = function() {
            true;
        }
        if (count == arr.length) {
            console.log(callback);
            callback();
        }
    });
}

// функция a() сработает только если загружены a.js, b.js, c.js
addScripts(["a.js", "b.js", "c.js"], function() {
    a();
});