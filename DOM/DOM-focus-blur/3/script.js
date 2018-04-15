// Горячие клавиши
// важность: 5
// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.

// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, 
// при этом <div> получит в виде HTML содержимое <textarea>.

// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.

//в прикладі працює без фокусіровки


document.onkeydown = function(e) {

    if (e.ctrlKey && e.keyCode == 69) {
        edit();
        return false; //трішки підглянув тут, бо загубився з  діями браузера по замовчуванні
        //решту моі думки, хоча схожі на їхні)
    }
    if (e.ctrlKey && e.keyCode == 83) {
        save();
        return false;
    }
    if (e.keyCode == 27) {
        esc();
        return false;
    }
}

function edit() {
    area.style.display = 'block';
    view.style.display = 'none';
}

function save() {
    view.innerHTML = area.value;
    area.style.display = '';
    view.style.display = '';
}

function esc() {
    area.style.display = 'none';
    view.style.display = 'block';
}