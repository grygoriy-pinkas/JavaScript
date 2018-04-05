// Слайдер
// важность: 5
// Создайте слайдер:


// Захватите мышкой синий бегунок и двигайте его, чтобы увидеть в работе.

// Важно:

// Слайдер должен нормально работать при резком движении мыши влево или вправо, за пределы полосы. 
// При этом бегунок должен останавливаться четко в нужном конце полосы.
// При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть все равно 
// работает (это удобно для пользователя).

var slider = document.getElementById('slider');
var thumb = document.getElementsByClassName('thumb')[0];
var sliderCoor = getCoords(slider);

thumb.addEventListener('mousedown', prepare);

function prepare(event) {
    console.log('ok');
    document.addEventListener('mousemove', moveAt);
    moveAt(event);
}


function moveAt(evt) {
    //ричажок рухається не зховсім біля курсора а на відстані відступу слайдера від вікна
    let cX = evt.clientX;
    let cY = evt.clientY;

    if (cX + sliderCoor.left < sliderCoor.left) {
        thumb.style.left = sliderCoor.left + 'px';
    } else if (cX + sliderCoor.left > slider.clientWidth + sliderCoor.left) {
        thumb.style.left = slider.clientWidth + sliderCoor.left - thumb.clientWidth;
    } else {
        thumb.style.left = cX + 'px';
    }

}

thumb.ondragstart = function() {
    return false;
};

document.onmouseup = function() {
    // document.onmousemove = document.onmouseup = null;
    document.removeEventListener('mousemove', moveAt);
};

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}