// Улучшенный плейсхолдер
// важность: 5
// Реализуйте более удобный плейсхолдер-подсказку на JavaScript через атрибут data-placeholder.

// Правила работы плейсхолдера:

// Элемент изначально содержит плейсхолдер. Специальный класс placeholder придает ему синий 
// цвет.
// При фокусировке плейсхолдер показывается уже над полем, становясь «подсказкой».
// При снятии фокуса, подсказка убирается, если поле пустое – плейсхолдер возвращается в него.


var input = document.querySelector('[data-placeholder]');
var textPlaceholder = input.getAttribute('data-placeholder');
var textAfterFocus = document.createElement('p');
var inputPosition = input.getBoundingClientRect();

showPlaceholder(input);

// Показать placeholder внутри input
// Также можно сделать это при помощи вёрстки, отдельным элементом
function showPlaceholder(input) {
    input.classList.add('placeholder');
    input.value = input.dataset.placeholder;
}

input.onfocus = function() {
    input.value = '';
    document.body.insertBefore(textAfterFocus, input);
    textAfterFocus.classList.add('placeholder-tooltip');
    textAfterFocus.innerHTML = textPlaceholder;
    textAfterFocus.style.top = (inputPosition.top - 35) + 'px';
}

input.onblur = function() {
    input.value = input.dataset.placeholder;
    document.body.removeChild(textAfterFocus);
}

// В этой задаче плейсхолдер должен работать на одном конкретном input. Подумайте, если 
// input много, как здесь применить делегирование?

//в уроці на цю тему описано про фазу перехвату, але я не зовсім роумію про що там йдеться