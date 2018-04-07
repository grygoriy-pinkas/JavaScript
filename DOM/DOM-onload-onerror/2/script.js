// Загрузить изображения с коллбэком
// важность: 4
// Создайте функцию preloadImages(sources, callback), которая предзагружает изображения из 
// массива sources, и после загрузки вызывает функцию callback.

// Пример использования:

// preloadImages(["1.jpg", "2.jpg", "3.jpg"], callback);
// Если вдруг возникает ошибка при загрузке – считаем такое изображение загруженным, чтобы не 
// ломать поток выполнения.

// Такая функция может быть полезна, например, для фоновой загрузки картинок в онлайн-галерею.

// В исходном документе содержатся ссылки на картинки, а также код для проверки, действительно 
// ли изображения загрузились. Он должен выводить «0», затем «300».


//взяв з розвязку. тут треба пояснити деякі моменти
function preloadImages(sources, callback) {
    var count = 0;

    function onLoad() {
        counter++;
        if (counter == sources.length) callback();
    }

    for (var i = 0; i < sources.length; i++) {
        var img = document.createElement('img');

        img.onload = img.onerror = onLoad;
        img.src = sources[i]; //я розумію предзагрузка проходить тільки після виконання цього рядка, оскільки 
        //аж тут додається посилання в атрибут. остання картинка не буде загружена?
        //як тоді ряд. 30, адже там виконається умова і функція вийде на виконання колбеку,
        //в якому до того ж алерт
    }
}

// ---------- Проверка ----------

/* файлы для загрузки */
var sources = [
    "https://js.cx/images-load/1.jpg",
    "https://js.cx/images-load/2.jpg",
    "https://js.cx/images-load/3.jpg"
];
for (var i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random(); // добавляем параметр, чтобы без кеша (для теста)
}

/** если картинка загружена, то можно будет сразу получить её ширину
 * создадим все картинки и проверим, есть ли у них ширина
 */
function testLoaded() {
    var widthSum = 0;
    for (var i = 0; i < sources.length; i++) {
        var img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
    }
    // каждое изображение 100x100, общая ширина должна быть 300px
    alert(widthSum);
}

// до загрузки - выведет 0
testLoaded();

// после загрузки - выведет 300
preloadImages(sources, testLoaded);