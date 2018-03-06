Геттеры и сеттеры

getters - setters

Написать объект с геттерами и сеттерами
// важность: 4
// Напишите конструктор User для создания объектов:

// С приватными свойствами имя firstName и фамилия surname.
// С сеттерами для этих свойств.
// С геттером getFullName(), который возвращает полное имя.


function User() {
    var firstName, surname;

    this.firstName = function(name) {
        if (!arguments) {
            return firstName;
        } else if (arguments.length == 1) {
            firstName = name;
        } else {
            throw new Error("Enter please single name");
        }
    };
    this.surname = function(name) {
        if (!arguments) {
            return surname;
        } else if (arguments.length == 1) {
            surname = name;
        } else {
            throw new Error("Enter please single surname");
        }
    }
    this.getFullName = function() {
        return firstName + " " + surname;
    }

}

var user = new User();
user.firstName("Петя");
user.surname("Иванов");
alert(user.firstName());
alert(user.firstName("Петя", "Петя"));

alert(user.getFullName()); // Петя Иванов

__________________________________________________________________

Добавить геттер для power
// важность: 5
// Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.
// Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.

// Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно 
// прочитать, но нельзя изменить.

function CoffeeMachine(power, capacity) {
    //в розвязку вони чомусь не зберегли power в приватну змінну, а беруть прямо з аргументів
    //так ніби не планують дальше використовувати
    var power = power;
    this.getPower = function() {
        return power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

}

var robot = new CoffeeMachine(145, 500);
console.log(robot.getPower());
__________________________________________________________________

Добавить публичный метод кофеварке
// важность: 5
// Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.

// При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };
    //так же само у них в розвязку при чому setWaterAmount залишається публічним методом
    //мені здається що два публічні методи які роблять одне і те саме не дуже вписуються в ООП 
    this.addWater = function(amount) {
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

__________________________________________________________________

Создать сеттер для onReady
// важность: 5
// Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.

// Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:

// Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady

// P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.

// P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска
// кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var externalOnReady = false;
    var on;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };
    this.setOnReady = function(func) {
        externalOnReady = true;
        //нижче прокоментуй. мені важливо це усвідомити
        // так не працює - чому?
        //this.on = func;
        //найперше робив так(раніше в якійсь задачі ти так мені дав підказку) - не працює - чому?
        //this[on] = func;
        //працює тільки так, в спробах вище не виходить записати в публічний метод
        //в відповіді так само зроблено, правда там перезаписали onReady. а при моїй реалізації ще можна
        //доробити reset
        on = func;
    }

    function onReady() {
        if (externalOnReady == false) {
            alert('Кофе готов!');
        } else {
            on();
        }
    }

    this.run = function() {
        //хоча тут вони ускладнили
        // this.run = function() {
        //     setTimeout(function() {
        //       onReady();
        //     }, getTimeToBoil());
        //   };
        // Чтобы setOnReady можно было вызывать в любое время, в setTimeout передаётся не onReady, 
        //а анонимная функция function() { onReady() }, которая возьмёт текущий (установленный последним)
        // onReady из замыкания.
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert('Готов кофе: ' + amount + 'мл');
});
//їхня реалізація має перевагу над моєю?
coffeeMachine.run();

__________________________________________________________________

Добавить метод isRunning
// важность: 5
// Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.

// Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она
//  запущена и false, если нет.

//Исходный код возьмите из решения предыдущей задачи.
//!!!БЕРУ СВОЮ РЕАЛІЗАЦІЮ

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var externalOnReady = false;
    var on;
    var WATER_HEAT_CAPACITY = 4200;
    var timerId = false;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };
    this.setOnReady = function(func) {
        externalOnReady = true;
        on = func;
    }

    function onReady() {
        if (externalOnReady == false) {
            alert('Кофе готов!');
        } else {
            on();
        }
    }
    this.isRunning = function() {
        return timerId == false ? false : true;

    };
    this.run = function() {
        timerId = setTimeout(onReady, getTimeToBoil());
        console.log(timerId);
        clearTimeout(timerId);
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert('До: ' + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
alert('В процессе: ' + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert("После: " + coffeeMachine.isRunning()); // После: false
});