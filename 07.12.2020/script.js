//1.Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно,
// то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне.
// Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки.
// Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте
// с помощью функции, которая служит для дебага.


// function p(name, basic) {
//     return prompt(name, basic);
// }
//
// function a(name) {
//     alert(name);
// }
//
// function d() {
//     debugger;
// }
//
// d();
// let name = p('Enter your name', '');
// a(name);
//
// a('Hello World');

//2. Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает
// с помощью prompt вопрос question, ответ по умолчанию - defaultValue.
// Что делать с полученным значением - определяет callback

// function ask(question, defaultValue, callback) {
//     answer = prompt(question, defaultValue);
//     callback(answer);
// }
//
// ask('How old are you?', '10', function (response) {
//     console.log('response ' + response);
// });




// //3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
// // каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename.
// // Используя встроенные функции массивов:
// //      a. Отфильтруйте пользователей младше 18 лет
// //      b. Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname,
// //          если есть все три, и только firstname и lastname, если middlename нет
// //      c. Сформируйте новый массив, который содержит только полное имя пользователей

// let users = [];

// users.push({firstName: 'soso', lastName: 'pavliashvili', age: 20},
//     {firstName: 'Oleg', lastName: 'jurba', age: 12},
//     {firstName: 'Vadim', middleName: 'der', lastName: 'Ardas', age: 91},
//     {firstName: 'Liza', lastName: 'kapriza', age: 13},
//     {firstName: 'nastya', middleName: 'baba', lastName: 'boy', age: 55},
//     {firstName: 'big', middleName: 'russian', lastName: 'boy', age: 15},
//     {firstName: 'Alex', lastName: 'Pushkin', age: 200},
//     {firstName: 'carantin', middleName: 'coronovich', lastName: 'china', age: 21},
//     {firstName: 'border', middleName: 'solid', lastName: '4to', age: 2020},
//     {firstName: 'Cardi', lastName: 'Bi', age: 37}
// );

// console.log(users);

// let less18 = users.filter(user => user.age < 18);
// console.log(less18);

// users.forEach(user => user.middleName ? user.fullName = user.firstName + ' ' + user.middleName + ' ' + user.lastName
//     : user.fullName = user.firstName + ' ' + user.lastName);
// console.log(users);

// let newData = users.map(function (user) {
//     return user.fullName;
// });
// console.log(newData);


// 7.“История в картинках”. Создайте массив тематически связанных строковых картинок.
// Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива
// (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.

// let smileMassive = [];
// smileMassive.push('&#128564;', '&#128524;', '&#129316;', '&#9200;', '&#129320;', '&#128532;');
// console.log(smileMassive);
// let j = 0;
// let $h3 = $('<h3>').appendTo('body');
// let $div = $('<div>').appendTo('body');
// $('<h1>').appendTo('div').text('дарова');
// console.log(smileMassive);

// function smile(smileMassive) {

//     let mas = [];
//     for (let i = 0; i < arguments.length; i++)
//         mas[i] = arguments[i];

//     $div.empty();
    

//     $div.append(mas[0][j]);
//     j++;

//     if (j === mas[0].length) j = 0;

// }

// let interval = setInterval(smile, 1500, smileMassive);
// setTimeout(() => {
//     clearInterval(interval);
//     $('<h1>').appendTo('div').text('Ну вот и все я ухожу из твоей жизни ');
// }, 19000);


//4. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл
// b) используя рекурсию:

// function cube(number) {
//     let cube = 1;
//     for (let i = 0; i < 3; i++)
//         cube *= number;
//     return cube;
// }

// console.log(cube(2));

// function cubeR(number, power) {
//     if (power === 1) return number;
//     else {
//         power--;
//         return number * cubeR(number, power);
//     }
// }

// console.log(cubeR(2, 3));

//5. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии

// function sum(...mas) {
//     // return mas[0];
//     //     debugger;
//     let sum = 0;
//     let elem = 0;
//     add(elem);

//     function add(elem) {
//         if (elem === mas.length) return sum;
//         else {
//             sum += mas[elem];
//             elem++;
//             return add(elem);
//         }
//     }

//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15

//6. Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true,
// если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте
//метод every или some

// function checkNumber(mas) {
//     let bool = true;
//     mas.forEach(item => {
//         if (isNaN(+item))
//             return bool = false;
//     });
//     return bool;
// }


// console.log(checkNumber([1, 2, '3', 'a'])); // false
// console.log(checkNumber([1, 2, '3', '4'])); // true

// Замыканиe
//1. Используя замыкание, напишите функцию createTimer, которая использует метод performance.now()
// для получения текущей временной метки и служит для замера времени выполнения другого кода:

// function createTimer() {
//    let a = performance.now();
//    return () => {
//         return performance.now()-a;
//     }
// }


// var timer = createTimer();
// alert('!');  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


//2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр
// и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

// function createAdder(greeting) {
//     return (name) => {
//        return greeting +name;
//     }
// }

// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10