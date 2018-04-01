var tree = document.getElementById('tree');
//тут важко прийшлось. код можна сказати розібраний а не написаний

function isOverTitle(evt, li) {

    var wrapper = document.createElement('span');
    var title = li.firstChild;
    li.insertBefore(wrapper, title);
    wrapper.appendChild(title);

    var isClickOnTitle = (document.elementFromPoint(evt.clientX, evt.clientY) == wrapper);

    wrapper.removeChild(wrapper.firstChild);
    li.replaceChild(title, wrapper);

    return isClickOnTitle;
}


var tree = document.getElementById('tree');

tree.onclick = function(evt) {
    var evt = evt || event;
    var target = evt.target || evt.srcElement;

    if (!isOverTitle(evt, target)) {
        return;
    }

    var node = target.getElementsByTagName('ul')[0];
    if (!node) return;

    node.style.display = node.style.display ? '' : 'none';
}