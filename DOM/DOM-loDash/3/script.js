// Сделайте меню ссылками
// важность: 5
// Возьмите в качестве исходного кода меню на шаблонах и модифицируйте его, чтобы оно
// выводило не просто список, а список ссылок.

// Вместо массива items меню должно принимать объект items.
// Вывод в шаблоне пусть будет не просто <li>Пончик</li>, а через ссылку: 
// <a href="#donut">Пончик</a>. При клике на ссылку должно выводиться название из её href.

function Menu(options) {
    var elem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        var html = options.template({
            title: options.title
        });

        elem = document.createElement('div');
        elem.innerHTML = html;
        elem = elem.firstElementChild;

        elem.onmousedown = function() {
            return false;
        }

        elem.onclick = function(event) {
            if (event.target.closest('.title')) {
                toggle();
            }
            //взяв у них
            if (event.target.closest('a')) {
                event.preventDefault();
                select(event.target.closest('a'));
            }
            //
        }
    }

    function renderItems() {
        if (elem.querySelector('ul')) return;

        var listHtml = options.listTemplate({
            items: options.items
        });
        elem.insertAdjacentHTML("beforeEnd", listHtml);
    }

    function open() {
        renderItems();
        elem.classList.add('open');
    };

    function close() {
        elem.classList.remove('open');
    };

    function select(link) {
        alert(link.getAttribute('href').slice(1));
    }

    function toggle() {
        if (elem.classList.contains('open')) close();
        else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
}

//я пробував вставити функцію яка б генерувала код атрибутів
var ins = function(key) {
    //тільки контекст тут window. я чомусь надіявся що то буде <a>
    this.setAttribute('href', key);
    // this.setAttribute('onclick', alert(this.getAttribute('href')));
}