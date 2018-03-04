Запуск кода из строки: eval

Eval - калькулятор
    // важность: 4
    // Напишите интерфейс, который принимает математическое выражение (prompt) и возвращает его результат.

// Проверять выражение на корректность не требуется.

function test() {
    var input = prompt('Enter your expression', '');
    var res = eval(input);
    return res;
}

test();


Перехват ошибок, "try..catch"

Eval - калькулятор с ошибками
    // важность: 5
    // Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления
    //через eval.

// При ошибке нужно выводить сообщение и просить переввести выражение.

// Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN,
//например 0/0.

function ReadError(message, cause) {
    this.message = message;
    this.cause = cause;
    this.name = 'ReadError';
    this.stack = cause.stack;
}

function run() {
    var indicator = false;
    do {
        try {
            var value = eval(request());
            console.log(value);
            if (value === NaN || value === undefined) {
                throw new ReadError("DO enter correct data. ENTER agan!", 'uncorrect expretion');

            } else {
                indicator = true;
                return value;
            }
        } catch (e) {
            alert('Error ' + e.message + ' Enter agan!')
        }
    } while (!indicator)


}


function request() {
    var input = prompt('Enter your expression', '');
    return input;
}

run();