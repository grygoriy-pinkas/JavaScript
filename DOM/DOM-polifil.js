poliifil

Полифилл для matches
// важность: 5
// Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с 
// префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или 
// Element.prototype.msMatchesSelector (старый IE).

// Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.

var pol = document.documentElement.matches;
if (pol === undefined) { // (1)
    var arr = [matchesSelector, webkitMatchesSelector, mozMatchesSelector];
    arr.forEach(function(item, i) {
        if (document.documentElement.item) {
            pol = document.documentElement.item;
        } else {
            pol = Element.prototype.msMatchesSelector;
        }
    });
}
-- -- -- -- -- -- -- -- -- -- -- --

Полифилл для closest
// важность: 5
// Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, не поддерживается 
// некоторыми браузерами, например IE11-.

// Создайте для него полифилл.

//взяв з прикладу. трохи важко тут розбиратись зараз. тому не сильно вникаю
    (function() {

    // проверяем поддержку
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
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
if (document.documentElement.textContent === undefined) {
    Element.prototype.textContent = Element.prototype.innerText;
}

//пробував подивитися на правильність доступу до прототипа
//цей варіант з помилкою Illegal invocation
console.dir(Element.prototype.textContent);

//тут є список методів, в яких nextContent не має жодних властивостей
console.dir(Element.prototype);