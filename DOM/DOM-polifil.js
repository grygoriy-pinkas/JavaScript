poliifil

Полифилл для matches
// важность: 5
// Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с 
// префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или 
// Element.prototype.msMatchesSelector (старый IE).

// Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.
    (function() {
    var pol = document.documentElement.matches;
    if (pol === undefined) { // (1)
        var arr = [document.documentElement.matchesSelector, document.documentElement.webkitMatchesSelector,
            document.documentElement.mozMatchesSelector, document.documentElement.msMatchesSelector
        ];
        arr.forEach(function(item, i) {
            if (item) {
                //так можна? чи треба з прототипа копіювати?
                Element.prototype.matches = item;
            }
        });
    }
})();
-- -- -- -- -- -- -- -- -- -- -- --

Полифилл для closest
// важность: 5
// Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, не поддерживается 
// некоторыми браузерами, например IE11-.

// Создайте для него полифилл.

//взяв з прикладу. трохи важко тут розбиратись зараз. тому не сильно вникаю
    (function() {

    // якщо немає даного метода в прототипі
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function(css) {
            //тут присвоюється в змінну контекст який в виконуваній функції (element.closest) матиме значення
            //element, тобто буде перевірятися поточний вузол. 
            //а якщо цього не зробити то що буде?????
            var node = this;

            while (node) {
                //тут порівнюється вузол з селектором на відповідність
                //і якщо відповідає то не розумію чому повертається вузол, а якщо ні то родич.
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

})();

-- -- -- -- -- -- -- -- -- -- -

Полифилл для textContent
// важность: 3
// Свойство textContent не поддерживается IE8. Однако, там есть свойство innerText.

// Создаёте полифилл, который проверяет поддержку свойства textContent, и если её нет – создаёт его, 
// используя innerText. Получится, что в IE8 «новое» свойство textContent будет «псевдонимом» для innerText.

// Хотя свойство innerText и работает по-иному, нежели textContent, но в некоторых ситуациях они могут
//  быть взаимозаменимы. Именно на них направлен полифилл.

//мій варіант відрізняється від 
    (function() {

    // проверяем поддержку
    if (document.documentElement.textContent === undefined) {

        // определяем свойство
        Object.defineProperty(HTMLElement.prototype, "textContent", {
            get: function() {
                return this.innerText;
            },
            set: function(value) {
                this.innerText = value;
            }
        });
    }

})();