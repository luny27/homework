// 1.Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов jQuery|браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.
// let img = {
//    src : "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
//    alt : " ",
//    style : "border: 1px solid #ccc",
//    width : "200"
// }
// let $img = $('<img>').appendTo('body')

// $img.attr('src', img.src)
// 2.Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
// let dates = {};

//         let date = new Date();
//         console.log(date);

//         let day = date.getDate();
//         console.log(day);
//         let month = date.getMonth();
//         console.log(month+1);
//         let year = date.getFullYear();
//         console.log(year);

//         let yesterday = year + '-' + (month+1) + '-' + (day-2);
//         dates.date1 = yesterday;

//         let secondDate = (year-1) + '-' + (month+1) + '-' + day;
//         dates.date2 = secondDate;

//         let userData = prompt('Введите свою дату', '2020-06-30');
//         if(userData < dates.date1 && userData > dates.date2){
//             alert('ura');
//         }
//         console.log(dates)
                    
// 3 Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. Запустите цикл, в котором через prompt запрашивается имя свойства. С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.
// const person = {};

// while(true){
//     const property = prompt('enter person key');
//     const value = prompt('enter person key value');

//     if(property === null || value === null){
//         break;
//     }
//     person [property] = value;
// }


// 4 Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.
// const person = {  
    // color : "black",   сделал для удобства консоли
//     weight: "300"
//     name: "Max"
//     gender: "famale"
// };

// while(true){
//     const property = prompt('enter person key');
//     const value = prompt('enter person key value');

//     if(property === null || value === null){
//         break;
//     }
//     person [property] = value;
// }

// while(true){
//     console.log(person);
//     const property = prompt('enter dia - delete or update', 'update');
//     if(property === 'update'){
        
//         while(true){
//             const property = prompt('enter person key');
//             const value = prompt('enter person key value');

//             if(property === null || value === null){
//                 break;
//             }
//             person [property] = value;
//         }
//     }
//     else if(property === 'delete'){
//         const prop = prompt('Введите свойство для удаления', '');
        
//         for ( let key in person){

//             if(prop in person){
//                 delete person[prop];
//             }
//         }
//     }
//     else if(property === null){
//         console.log('Остановить редакритование/удаление');
//         break;
//     }
//     else{
//         alert('error');
//     }
// }

// 5 Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).
// const person = {};

// while(true){
//     const property = prompt('enter person key');
//     const value = prompt('enter person key value');

//     if(property === null || value === null){
//         break;
//     }
//     person [property] = value;
// }

// while(true){
//     console.log(person);
//     const property = prompt('enter dia - delete or update', 'update');
//     if(property === 'update'){
        
//         while(true){
//             const property = prompt('enter person key');
//             const value = prompt('enter person key value');

//             if(property === null || value === null){
//                 break;
//             }
//             person [property] = value;
//         }
//     }
//     else if(property === 'delete'){
//         const prop = prompt('Введите свойство для удаления', '');
        
//         for ( let key in person){

//             if(prop in person){
//                 delete person[prop];
//             }
//         }
//     }
//     else if(property === null){
//         console.log('Остановить редакритование/удаление');
//         break;
//     }
//     else{
//         alert('error');
//     }
// }

// const $dl = $('<dl>').appendTo('body');
// for ( let key in person){
//     $('<dt>')
//     .appendTo($dl)
//     .text (key);
//     $('<dd>')
//     .appendTo($dl)
//     .text(person[key])
// }

// 6 Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, то есть перебором свойств.
 
// const person = {};

// while(true){
//     const property = prompt('enter person key');
//     const value = prompt('enter person key value');

//     if(property === null || value === null){
//         break;
//     }
//     person [property] = value;
// }

// while(true){
//     const property = prompt('enter dia - delete or update', 'update');
//     if(property === 'update'){
        
//         while(true){
//             const property = prompt('enter person key');
//             const value = prompt('enter person key value');

//             if(property === null || value === null){
//                 break;
//             }
//             person [property] = value;
//         }
//     }
//     else if(property === 'delete'){
//         const prop = prompt('Введите свойство для удаления', '');
        
//         for ( let key in person){

//             if(prop in person){
//                 delete person[prop];
//             }
//         }
//     }
//     else if(property === null){
//         console.log('Остановить редакритование/удаление');
//         break;
//     }
//     else{
//         alert('error');
//     }
// }


// const phone = {};
// while(true){
//         const property = prompt('введите свойства телефона');
        
//         const value = prompt('значение телефона');
    
//         if(property === null || value === null){
//             break;
//         }
//         phone [property] = value;
//     }

// person.gadget = phone
// var person2 = {};
// for (var key in person) {
// 	person2[key] = person[key];
// }

// person2.color = 'yellow';

// const $dl = $('<dl>').appendTo('body');
// for ( let key in person){
//     $('<dt>')
//     .appendTo($dl)
//     .text (key);
//     $('<dd>')
//     .appendTo($dl)
//     .text(person[key])
// }
// console.log(person); // {name: "John"}
// console.log(person2); // {name: "Tom", age: 30}
// 7 С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>
// const person = {};

// while(true){
//     const property = prompt('enter person key');
//     const value = prompt('enter person key value');

//     if(property === null || value === null){
//         break;
//     }
//     person [property] = value;
// }

// while(true){
//     const property = prompt('enter dia - delete or update', 'update');
//     if(property === 'update'){
        
//         while(true){
//             const property = prompt('enter person key');
//             const value = prompt('enter person key value');

//             if(property === null || value === null){
//                 break;
//             }
//             person [property] = value;
//         }
//     }
//     else if(property === 'delete'){
//         const prop = prompt('Введите свойство для удаления', '');
        
//         for ( let key in person){

//             if(prop in person){
//                 delete person[prop];
//             }
//         }
//     }
//     else if(property === null){
//         console.log('Остановить редакритование/удаление');
//         break;
//     }
//     else{
//         alert('error');
//     }
// }


// const phone = {};
// while(true){
//         const property = prompt('введите свойства телефона');
        
//         const value = prompt('значение телефона');
    
//         if(property === null || value === null){
//             break;
//         }
//         phone [property] = value;
//     }

// person.gadget = phone
// var person2 = {};
// for (var key in person) {
// 	person2[key] = person[key];
// }

// person2.color = 'yellow';

// const $dl = $('<dl>').appendTo('body');
// for ( let key in person){
//         if (typeof person[key] === 'object'){

//         $('<dt>').appendTo($dl).text (key);

//         const $dl2 = $('<dd>').appendTo('dl');
//         for ( let key in phone){
//             $('<dt>')
//             .appendTo($dl2)
//             .text (key);
//             $('<dd>')
//             .appendTo($dl2)
//             .text(phone[key])
//         }
//     }
//     else{ $('<dt>')
//     .appendTo($dl)
//     .text (key);
//     $('<dd>')
//     .appendTo($dl)
//     .text(person[key])
// }
// }
// let {gadget} = person2

// console.log(person); // {name: "John"}
// console.log(person2); // {name: "Tom", age: 30}