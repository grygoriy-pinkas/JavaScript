Функциональное наследование 2

Унаследуйте холодильник
// важность: 4
// Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и
//  методами addFood(...), getFood():

// Приватное свойство food хранит массив еды.
// Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими
//  аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
// Если холодильник выключен, то добавить еду нельзя, будет ошибка.
// Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается 
// в конструкторе. При попытке добавить больше – будет ошибка
// Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из
//  которого не должно влиять на свойство food холодильника.

function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge() {
    Machine.apply(this, arguments);
    var MAX_CAUNT_UNITS = Math.round(this._power / 100);
    var _food = [];

    this.addFood = function() {
        try {
            if (this._enabled == false) {
                //спочатку кидав ерори але воно зупиняє скрипт
                throw new Error("Refrigerator is out of order. It is impossible to add food.");
                //console.log("Refrigerator is out of order. It is impossible to add food");
            } else {
                //console.log(MAX_CAUNT_UNITS);
                var arg = [].slice.call(arguments);
                // console.log(arguments);
                arg.forEach(function(item, i) {
                    if (_food.length + arg.length < MAX_CAUNT_UNITS) {
                        _food.push(item);
                        //console.log(_food);
                    } else {
                        throw new Error("It's unpossible. Will be to mach foods");
                        //console.log("It's unpossible. Will be to mach foods.");
                        return;
                    }
                });
            }
        } catch (e) {
            console.log("You have a problem. " + e.message + " Try again.");
        }
    }

    this.getFood = function() {
        //return _food.length == 0 ? console.log("Refrigerator is empty") : console.log(_food);
        _food.length == 0 ? console.log("Refrigerator is empty") : console.log(_food.length);


        return _food;
    }

}
var fridge = new Fridge(500);
fridge.getFood();



// Код использования холодильника без ошибок:
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert(fridgeFood); // котлета, сок, варенье


// добавление элементов не влияет на еду в холодильнике
//fridgeFood.push("вилка", "ложка");

alert(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

// Ещё код для проверки:
// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт");
// ошибка, слишком много
___________________________________________________________

Добавьте методы в холодильник
// важность: 5
// Добавьте в холодильник методы:

// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.


//Добавьте методы в холодильник
// важность: 5
// Добавьте в холодильник методы:

// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
function Fridge() {
    Machine.apply(this, arguments);
    var MAX_CAUNT_UNITS = Math.round(this._power / 100);
    var _food = [];

    this.addFood = function() {
        if (this._enabled == false) {
            //спочатку кидав ерори але воно зупиняє скрипт
            //throw new Error("Refrigerator is out of order. It is impossible to add food");
            console.log("Refrigerator is out of order. It is impossible to add food");
        } else {
            //console.log(MAX_CAUNT_UNITS);
            var arg = [].slice.call(arguments);

            arg.forEach(function(item, i) {
                if (_food.length + arg.length < MAX_CAUNT_UNITS) {
                    _food.push(arg[i]);
                    //console.log(_food);
                } else {
                    //throw new Error("It's unpossible. Will be to mach foods");
                    console.log("It's unpossible. Will be to mach foods");
                    return;
                }
            });
        }
    }

    this.getFood = function() {
        return _food.length == 0 ? "Refrigerator is empty" : _food;

    };
    this.removeFood = function(name) {
        return _food.filter(function(item, i) {
            if (_food[i].title == name.title) {
                _food.splice(i, 1);
            }
        });
    };

    //а так в розвязку, я забув про indexOf
    // this.removeFood = function(item) {
    //     var idx = food.indexOf(item);
    //     if (idx != -1) food.splice(idx, 1);
    //   };

    //швидше я так зробив
    // this.filterFood = function(func) {
    //     var _afterFilter = [];
    //     _food.forEach(function(item, i){
    //         if(func(item))
    //         {
    //             _afterFilter.push(item);
    //         }

    //     });
    //     return _afterFilter;
    // };
    //потім в коменти заглянув
    this.filterFood = function(func) {
        return _food.filter(func);
    };

}

var fridge = new Fridge(2000);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

console.log(fridge.getFood());
var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

console.log(dietItems);


fridge.removeFood("нет такой еды"); // без эффекта
console.log(fridge.getFood()); // 4

dietItems.forEach(function(item) {
    console.log(item.title); // сок, зелень
    fridge.removeFood(item);
});

console.log(fridge.getFood()); // 2
___________________________________________________________

Переопределите disable
// важность: 5
// Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.
function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}
//Добавьте методы в холодильник
// важность: 5
// Добавьте в холодильник методы:

// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
function Fridge() {
    Machine.apply(this, arguments);
    var MAX_CAUNT_UNITS = Math.round(this._power / 100);
    var _food = [];

    var parentDisable = this.disable;
    this.disable = function() {
        console.log(this._enabled); //on
        //тут переоприділяючи батьківський метод ми виключаємо,
        //єдиний вихід включити знову. чи є якийсь спосіб заборонити виключати звідси
        //в відповіді стрічку нижче не визивають, а кидають помилку, або визивають батьківський метод 
        // в середині свого

        console.log(this._enabled); //of
        if (_food.length != 0) {
            //перемістив сюди
            parentDisable.call(this);
            console.log(this._enabled); //of
            console.log("Refregerator isn't empty");
            this._enabled = true;
            console.log(this._enabled); //on
        }
    };

    this.addFood = function() {
        if (this._enabled == false) {
            //спочатку кидав ерори але воно зупиняє скрипт
            //throw new Error("Refrigerator is out of order. It is impossible to add food");
            console.log("Refrigerator is out of order. It is impossible to add food");
        } else {
            //console.log(MAX_CAUNT_UNITS);
            var arg = [].slice.call(arguments);

            arg.forEach(function(item, i) {
                if (_food.length + arg.length < MAX_CAUNT_UNITS) {
                    _food.push(arg[i]);
                    //console.log(_food);
                } else {
                    //throw new Error("It's unpossible. Will be to mach foods");
                    console.log("It's unpossible. Will be to mach foods");
                    return;
                }
            });
        }
    }

    this.getFood = function() {
        return _food.length == 0 ? "Refrigerator is empty" : _food;

    };
    this.removeFood = function(name) {
        _food.forEach(function(item, i) {
            if (_food[i].title == name.title) {
                _food.splice(i, 1);
            }
        });
    };
    this.filterFood = function(func) {
        return _food.filter(func);
    };

}

var fridge = new Fridge(500);
fridge.enable();
//тут в прикладі стрічку записують, я не став уже переробляти щоб зх неї робило обєкт
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
console.log(fridge.getFood());