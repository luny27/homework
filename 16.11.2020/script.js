
/*Найдите и исправьте ошибки в код.е:
 */

// 'use strict';

// var x = parseInt(prompt("введите X", '2'));
// var y = parseInt(prompt("введите Y", '2'));
// var c = x + y;
// alert('Сумма: ' +(x+y));

/*2. Создайте три переменные. Присвойте первой переменной случайное целочисленное значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Распечатайте все три.
*/

// var a = Math.floor(Math.random() * 11);
// var b = a*3
// var d = a+b

/*3.Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.
*/
// var FirstName = prompt("Имя");
//     var LastName = prompt("Фамилия");


//     function ucFirst(str) {
//       console.log(str);
//         if (!str) return str;
//         return str[0].toUpperCase() + str.slice(1);
//       }
//     FirstName = ucFirst(FirstName);
//     LastName = ucFirst(LastName);

//     let data = FirstName + ' ' + LastName;
//     alert('Whats`up ' + data);

/*4.Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне. (Процесс вычисления посмотрите в debugger.)
*/

// const choice = prompt('что ты хочешь сделать с числом → +, -, *, /', '+');
//     let x = prompt('enret number');
//     let y = prompt('enret number');
    
//     if (choice === '+' || choice === '-' || choice === '*' || choice === '/') {
//       const summ = 'Summ is ' + (+x + +y);
//       const minus = 'Minus is ' + (+x - +y);
//       const multi = 'multi is ' + (+x * +y);
//       const degree = 'Degree is ' + (+x / +y);
//       console.log(summ);
//       console.log(minus);
//       console.log(multi);
//       console.log(degree);
//      document.querySelector ('.p1').textContent = summ;
//      document.querySelector ('.p2').textContent = multi;
//      document.querySelector ('.p3').textContent = minus;
//      document.querySelector ('.p4').textContent = degree;
   
//     }
//     else{
//       alert('Ты не ввел символ');
//     }

//     $(function(){
//       $('#exampleModal').arcticmodal();
//   });
// const choice = prompt('Что ты хочешь сделать? введи символ → +, -, *, /', '+');
//     let x = prompt('enret number');
//     let y = prompt('enret number');
    
//     if (choice === '+') {
//       const summ = alert('Summ is ' + (+x + +y));
//     }
//     else if(choice === '-'){
//       const minus = alert('Minus is ' + (+x - +y));
//     }
//     else if(choice === '*'){
//       const mylti = alert('multi is ' + (+x * +y));
//     }
//     else if(choice === '/'){
//       const degree = alert('Degree is ' + (+x / +y));
//     }
//     else{
//       alert('Ты не ввел правильный символ');
//     }

/*5.Космический корабль летит с Земли на Луну. Расстояние равно 384,400 км. Скорость полета корабля определяется в prompt. Рассчитайте, за какое время ваш космический корабль доберется до Луны.
*/
// const l = 384400; // км 
// let speed = prompt('введите скорость в км/ч', '11'); // км в час
// let time = l / +speed; // час 
// const newTime = Math.round(time);
// alert(newTime + ' ч')

/*6.Напишите программу, которая без использования оператора сравнения определяет, является ли целое число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.
*/
// function isOdd(num) { return num % 2;}
    
//     if(isOdd(number)){
//       alert(number + ' нечетное');
//     }
//     else{
//       alert(number + ' четное');
//     }

// let number = prompt('введите целое число', '1');//5
//     let phrase = '';
    
//     if(number % 2 == 0){
//       phrase = "Ваше число " + number + " четное =)"
//     }
//     else{
//       phrase = "Ваше число " + number + " нечетное =)"
//     }
//     console.log(phrase);

/*7.Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом. 

let value = prompt('введите значение');
    let phrase = ''

    if(isNaN(+value)){
      phrase = "Вы ввели нечисло " + value;
    }
    else{
      phrase = "Вы ввели число " + +value;
    }
    console.log(phrase);

*/


/*8.Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт). Значения считаются из prompt, результаты отображаются в alert. Используйте константы там, где это логически оправдано.

*/

/*9,У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.

*/


/*10.На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.

*/




/*11 level up */

// let number = Math.random() * 100, x = Math.round(number), y = +prompt('введите какое-то число', "2"), text3 = '';
//     alert(((y - x) > 0 ) ? text3 = 'x < y = true' + '; x =' + x + '; y =' + y + ';' : text3 = 'x < y = false' + '; x =' + x + '; y =' + y + ';');




// let number = Math.random() * 100;
//     let x = Math.round(number);
    
//     let y = +prompt('введите какое-то число', "2");

//     console.log(x);
//     console.log(y);
//     let text3 = '';

//     if((y - x) > 0 ){
//       console.log("второе число больше");
//       text3 = 'x < y = true' + '; x =' + x + '; y =' + y + ';';
//     }
//     else{
//       console.log("Первое число больше");
//       text3 = 'x < y = false' + '; x =' + x + '; y =' + y + ';';
//     }
//     alert(text3);
