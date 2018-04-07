// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при 
// одновременном нажатии клавиш со скан-кодами code1, code2, …, code_n.

// document.addEventListener('keypress', )
// function runOnKeys(func, code1, code2) {

//     console.log(code1);
//     console.log(code2);
// }


function runOnKeys(func, code1, code2, ...code_n) {
    var presed = {};
    var arg = [].slice.call(arguments);
    var func = arg.splice(0, 1)[0];
    var newArr = [];
    document.onkeydown = function(e) {
        // console.log(e.keyCode);
        if (!("e.keyCode" in presed)) {
            presed[e.keyCode] = true;
        }

        // var size = Object.keys(myObj).length;
        //console.log("e.keyCode" in presed);
        //  console.log(func);
        console.log(arg.length);
        if (arg.length == Object.keys(presed).length) {
            func();
        }
        console.log(presed.length);
    }
    document.onkeyup = function(e) {
        delete presed[e.keyCode];
        // console.log(presed);
    }


}

runOnKeys(
    function() { alert("Привет!") },
    "Q".charCodeAt(0),
    "W".charCodeAt(0)
);

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
}