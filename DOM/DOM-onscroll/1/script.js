// Аватар наверху при прокрутке
// важность: 5
// Сделайте так, чтобы при прокрутке ниже элемента #avatar (картинка с Винни-Пухом) – он продолжал 
// показываться в левом-верхнем углу.

// При прокрутке вверх – должен возвращаться на обычное место.

var scroll = parseInt(avatar.getBoundingClientRect().top + avatar.clientHeight);
var leftCol = document.getElementsByClassName('column-left')[0];

document.onscroll = function(e) {
    if (scroll < window.pageYOffset) {
        avatar.className = 'fixed';
    } else {
        avatar.classList.remove('fixed');
    }
}