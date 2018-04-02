var house = document.getElementById('house');

house.addEventListener('mouseover', showMessage);
house.addEventListener('mouseout', hideMessage);

var div = document.getElementById('message');

function showMessage() {
    console.log(this);
    var target = event.target;
    console.log(target);
    if (target.getAttribute('data-tooltip')) {
        var message = target.getAttribute('data-tooltip');
    } else {
        message = this.getAttribute('data-tooltip');
    }
    //тут в мене ще виникала думка застовувати перевірку на вложеність таргету в тег який має тултіп
    //і якщо тру то виводити тултіп над таргетом батьквського вузла. але не довів до кінця. якщо бачиш 
    //такий варіант вирішення задачки то підкажи як застосувати цю фічу
    //if (!message) return;
    //if (this.contains(target)) {
    div.style.display = 'block';
    //}
    if (target.getAttribute('data-tooltip')) {
        var map = target.getBoundingClientRect();
    } else {
        map = this.getBoundingClientRect();
    }
    if (map.top < div.offsetHeight + 5) {
        div.style.top = map.bottom + window.pageYOffset + 5 + 'px';
    } else {
        div.style.top = map.top - div.offsetHeight - 5 + 'px';
    }

    div.style.left = map.left + 'px';
    div.innerHTML = message;
}

function hideMessage() {
    div.style.display = 'none';
}