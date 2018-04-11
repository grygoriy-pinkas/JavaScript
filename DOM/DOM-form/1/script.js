// Добавьте опцию к селекту
// важность: 5

// При помощи JavaScript:

// Выведите значение и текст текущей выбранной опции.
// Добавьте опцию: <option value="Classic">Классика</option>.
// Сделайте её выбранной.

// console.log(document.forms);

var form = document.forms.form;
var select = form.select;

showSelected(select);

var option = new Option("Классика", "Classic", true, true);
select.appendChild(option);

showSelected(select);

function showSelected(select) {
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected) {
            alert(option.value + " " + option.text);
        }
    }
}