// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при 
// одновременном нажатии клавиш со скан-кодами code1, code2, …, code_n.


//після поглянув в розвязок то виправивися трохи)))

function runOnKeys(func, code1, code2, ...code_n) {
    var presed = {};
    var arg = [].slice.call(arguments);
    var func = arg.splice(0, 1)[0];
    document.onkeydown = function(e) {

        // if (!("e.keyCode" in presed)) {
        presed[e.keyCode] = true;
        // }

        for (var i = 0; i < arg.length; i++) { // проверить, все ли клавиши нажаты
            if (!presed[arg[i]]) {
                return;
            }
        }
        presed = {};

        func();
        console.log(presed);
    }
    document.onkeyup = function(e) {
        delete presed[e.keyCode];
    }
}

runOnKeys(
    function() { alert("Привет!") },
    "Q".charCodeAt(0),
    "W".charCodeAt(0)
);

// function getChar(event) {
//     if (event.which == null) {
//         if (event.keyCode < 32) return null;
//         return String.fromCharCode(event.keyCode) // IE
//     }

//     if (event.which != 0 && event.charCode != 0) {
//         if (event.which < 32) return null;
//         return String.fromCharCode(event.which) // остальные
//     }

//     return null; // специальная клавиша
// }