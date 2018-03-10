Свои ошибки, наследование от Error

Унаследуйте от SyntaxError
// важность: 5
// Создайте ошибку FormatError, которая будет наследовать от встроенного класса SyntaxError.

// Синтаксис для её создания – такой же, как обычно:

function FormatError(property) {
    Error.call(this, property);
    this.name = "FormatError";

    this.property = property;
    this.message = this.name + ' ' + property;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, FormatError);
    } else {
        this.stack = (new Error()).stack;
    }
}
var err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // стек на момент генерации ошибки

alert(err instanceof SyntaxError); // true