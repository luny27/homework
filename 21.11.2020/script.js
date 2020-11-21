// Условные и логические операторы

// 1.Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел.
// Запишите алгоритм программно: создайте три переменные с любыми числовыми значениями; используя только вложенные условные операторы if (НЕ логические операторы),
// найдите минимальное число и отобразите на экране его значение. 



// 2.По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. 
//Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль).

// let speed = +prompt('скорость улитки');
// if(speed>0){
//     alert('улитка ползет вперед')
// }else if(speed == 0){
//     alert('улитка спит')
// }else if ( speed < 0 ){
//     alert('улитка скатилась назад')
// }



// 3.У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
// В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива.
//С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

// let my = +prompt('мои бабки')
// let friend = +prompt('его бабки')

// let summ = my + friend

// if(summ<=100){
//     alert(summ +  ' грн идем пить пиво')
// }else if (summ<=1000){
//     alert(summ + ' грн идем учить английский')
// }else if(summ>1000){
//     alert(summ + ' грн летим на Мальту')
// }


// 4.В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.
//(каждый парный год нужно идти на прививку <30) вместо просто ELse 27

// let age = +prompt('сколько вам лет')
// if (age < 20) {
// 	alert( 'пока гуляй' );
// } else if (age < 30) {
//     var odd = Boolean(age % 2)
//     if (!odd){
//         alert('пора на прививку')
//     } else {
//         alert('на прививку через год')
//     }
// } else {
//     alert('спи спокойно')
// }


// 5.Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt.
// Если ваша, то вы едете домой, в противном случае – ожидаете.


// let taxi = +prompt('Какая маршрутка приехала?', '')
// if (taxi == 7 || taxi == 275 || taxi == 255) {
// 	alert( 'ура я еду домой' );
// } else  {
//     alert( 'придется еще подождать' );
// }


// 6.В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.

// let date = new Date();
// let day = date.getDay();
// console.log(day)
// switch(day){
//     case 1: 
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         alert('пора на работу');
//         break;
//     case 6:
//     case 7:
//         alert('Сидим дома');
//         break;

//         default: result = 'ошибка'
//         alert('ошибка')
// } 

// let days = [
//     'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' 
//   ];

//   let date = new Date();
//   let day = date.getDay();

//   function show(day){
//     console.log(day);
//     let activeDay = days[(day-1)];
//     console.log(activeDay);

//     switch(activeDay){
//         case 'пн': 
//         case 'вт':
//         case 'ср':
//         case 'чт':
//         case 'пт':
//             alert('Сегодня ' + activeDay + ', пора на работу');
//             break;
//         case "сб":
//         case "вс":
//             alert('Сегодня ' + activeDay + ', сиди вдома =) ');
//             break;

//           default: result = 'ошибка'
//           alert('ошибка')
//     }
//   }
//   show(day);



// 7.Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения),
// из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.

// let money = prompt('выберите валюту для конвертации, "uah" или "usd"','uah' )

// if(money = 'uah'){
//     var action = prompt('Что вы хотите сделать с ₴ ?', 'продать')
// } else if (money = 'usd'){
//     var action = prompt('Что вы хотите сделать с $ ?', 'продать')
// }

// let x2 = action.toLowerCase()

// let amount = +prompt('введите сумму')

// let result = 'ошибка';
// let des = '';
// let finishMoney = '';
// switch (x2) {

//     case 'продать':
//         if(money='uah'){
//             des = 'вы получите ';
//             finishMoney = '$'
//          result = amount/27;
//          console.log(1)
//           break;
//         }
//         else if(money='usd'){
//          des = 'вы получите ';
//          finishMoney = '₴'
//          result = amount*27;
//          console.log(2)
//           break;
//         }
        
//     case 'купить':
//         if(money='uah'){
//             des = 'вы получите ';
//             finishMoney = '₴'
//             result = amount*29;
//             console.log(3)
//             break;
//         }
//         else if(money='usd'){
//             des = 'вы получите ';
//             finishMoney = '$'
//             result = amount/29;
//             console.log(4)
//             break;
//         }
// 	default: result = 'ошибка';
// }
// alert(des + result + finishMoney)


// 8.Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). 
// Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. 
// Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

// let greeting = "" 
// let lang = prompt('выбирете язык (ru,en,de)')
// if (lang == "ru"){
//    greeting = 'добро пожаловать' 
   
// }
// else if (lang == "en"){
//     greeting = 'Hi'

//  }
//  else if (lang == "de"){
//     greeting = 'Hände hoch' 

//  } else{
//      alert('выбери язык')
//  }
//   alert(greeting)


// 9.В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// var d=new Date();
// var month=new Array(12);
// month[0]="Январь";
// month[1]="Февраль";
// month[2]="Март";
// month[3]="Апрель";
// month[4]="Май";
// month[5]="Июнь";
// month[6]="Июль";
// month[7]="Август";
// month[8]="Сентябрь";
// month[9]="Октябрь";
// month[10]="Ноябрь";
// month[11]="Декабрь";
// alert("На дворе месяц " + month[d.getMonth()]); 

// let today = month[d.getMonth()];
// console.log(today)
// if(today == month[8] || today == month[9] || today == month[10]){
//     console.log('fall')
// }
// else if(today == month[11] || today == month[0] || today == month[1]){
//     console.log('winter')
// }
// else if(today == month[2] || today == month[3] || today == month[4]){
//     console.log('spring')
// }
// else if(today == month[5] || today == month[6] || today == month[7]){
//     console.log('summer')
// }else {
//     console.log('ошибка')
// }

// 10.Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru',
//  то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
//   Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
// let lang = prompt('Введите мову', 'ru');

//     let daysRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ];
//     let daysEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

//     let date = new Date();
//     let day = (date.getDay() - 1);

//     function show(day){
//       console.log(day);

//       if(lang == "ru"){
//         let result = daysRu[day];
        
//         switch(result){
//           case 'понедельник': 
//           case 'вторник':
//           case 'среда':
//           case 'четверг':
//           case 'пятница':
//               alert('Сегодня ' + result + ', пора на работу');
//               break;
//           case "суббота":
//           case "воскресенье":
//               alert('сегодня ' + result + ', сиди дома =) ');
//               break;

//             default: result = 'ошибка'
//             alert('ошибка')
//         }
//       }
//       else if(lang == "en"){
//         let result = daysEn[day];

//         switch(result){
//             case 'monday': 
//             case 'tuesday':
//             case 'wednesday':
//             case 'thursday':
//             case 'friday':
//                 alert('сегодня ' + result + ', пора на работу');
//                 break;
//             case 'saturday':
//             case 'sunday':
//                 alert('сегодня ' + result + ', сиди дома =) ');
//                 break;

//               default: result = 'ошибка'
//               alert('ошибка')
//         }
//       }
//       else{
//         alert('Очипка, неправильно выбран язык');
//       }
//     }
//     show(day);



// 11.TABLICA
// jQuery(document).ready(function($) {
//     $('#root table').css({
//         margin: '0 auto'
//     });

    

//     $('#root td').css({
//         height: '10px',
//         width: '10px',
//         background: '#eee',
//         border: '1px solid #000'
//     });

//     $('#root tr:nth-child(1) td').css({
//         background: '#106b63'
//     });
//     $('#root tr:nth-child(2) td').css({
//         background: '#106b63'
//     });
//     $('#root tr:nth-child(3) td').css({
//         background: '#106b63'
//     });
//     $('#root tr:nth-child(4) td').css({
//         background: '#106b63'
//     });
//     $('#root tr:nth-child(5) td').css({
//         background: '#106b63'
//     });
//     $('#root tr:nth-child(6) td').css({
//         background: '#106b63'
//     });

//     $('#root tr:nth-child(7) td').css({
//         background: '#E7C610'
//     });
//     $('#root tr:nth-child(8) td').css({
//         background: '#E7C610'
//     });
//     $('#root tr:nth-child(9) td').css({
//         background: '#E7C610'
//     });

//     $('#root tr:nth-child(10) td').css({
//         background: '#C64A08'
//     });
//     $('#root tr:nth-child(11) td').css({
//         background: '#C64A08'
//     });
//     $('#root tr:nth-child(12) td').css({
//         background: '#C64A08'
//     });

//     $('#root tr:nth-child(13) td').css({
//         background: '#B43100'
//     });
//     $('#root tr:nth-child(14) td').css({
//         background: '#B43100'
//     });
//     $('#root tr:nth-child(15) td').css({
//         background: '#B43100'
//     });

    
//     $('#root tr:nth-child(15) td').css({
//         background: '#102173'
//     });
//     $('#root tr:nth-child(16) td').css({
//         background: '#102173'
//     });
//     $('#root tr:nth-child(17) td').css({
//         background: '#102173'
//     });
//     $('#root tr:nth-child(18) td').css({
//         background: '#102173'
//     });
//     $('#root tr:nth-child(19) td').css({
//         background: '#102173'
//     });

//     $('.none').css({
//         background: 'none',
//         border: 'none'
//     });

//     console.log();
// });