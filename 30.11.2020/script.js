// Массивы и объекты
// 1.Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// const mix = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

//     let summ = 0;
//     for( let i = 0; i < mix.length; i++){
//         let item = +mix[i];
//         if (isNaN(item)){
//                console.log('не число');
//         }else {
//             summ = summ + item;
//         }
        
//     }
//     alert(summ);

// 2.Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень. Для возведения в степень используйте вложенный цикл (не метод Math.pow(), не оператор **).

// let array = [];

//     for( let i = 0; i < 3; i++){
//         let number = Math.random();
//         //console.log(number);
//         let num = number.toFixed(2);
//         let result = 1;
//         for(let j = 1; j <= 5; j++){

//           result=result*num;

//         };

//         array.push(result);
//     }

//     console.log(array);

// 3.Создайте массив со значениями: ‘Angular’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

// const arr = ['Angular', 'jQuery'];
// arr.unshift ('Backbone.js')
// console.log(arr)
// arr.push('ReactJS', 'Vue.js');
// console.log(arr)
// arr.splice(2, 0, 'CommonJS');
// console.log(arr)
// arr.splice(3, 1);
// alert('это здесь лишнее')
// console.log(arr)

// 4. Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
// const text = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
        // let words = text.split(' ');

        // console.log(typeof words);

        // let rightWords = words.splice(4, 2, 'Городской', 'Сломал' );

        // console.log(words);
        // alert(text + '\n ' + words.join(' '));
// 5.Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
// let array = [];
//     let number = Math.random();
//     let n = (number.toFixed(1))*10;
//     let summ = 0;

//     for( let i = 0; i < n; i++){
//         let string = +prompt('Введите что-то', '');
        
//         let item = string;
//         if (isNaN(item)){
//                console.log('не число');
//         }else {
//             summ = summ + item;
//         }

//         array.push(string);
//     }
//     alert(summ);