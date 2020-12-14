
// 1. +

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     diff(){
//         return this.a - this.b;
//     }, 

//     div() {
//         return this.a / this.b;
//     },

//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );
//   alert( calculator.diff() );
//   alert( calculator.div() );

//   2.

//   let coffeeMachine = {
//       message: 'your cofee is ready!',
//       start(){
//           setTimeout(() => {
//               alert(this.message);
//           },3000);
//           return this.message
//       }
// };
// coffeeMachine.start();

// 3

//3

// const array = {
//     massiv: ['name'],

//     init(value){
//       this.massiv[0] = value;
//       return this;
//     },

//     set(value){
//       this.massiv.push(value);
//       //console.log(this.massiv);
//       return this;
//     },

//     show(){
//       console.log(this.massiv);
//       //return this.massiv;
//       return this;
//     },

//     delete(){
//       this.massiv.pop();
//       return this;
//     }
//   }


//   array.set('height').init('weight').show().delete().show();


//4

// const me = {
//     x: calculator.a,
//     y: calculator.b,

//     getSumm(){
//       return this.x + ' + ' + this.y + ' = ' + calculator.sum();
//     },

//     getDiff(){
//       return this.x + ' - ' + this.y + ' = ' + calculator.diff();
//     },

//     getMulti(){
//       return this.x + ' * ' + this.y + ' = ' + calculator.mul();
//     },

//     getDiv(){
//       return this.x + ' / ' + this.y + ' = ' + calculator.div();
//     }
//   };

//   alert(me.getSumm());
//   alert(me.getDiff());
//   alert(me.getMulti());
//   alert(me.getDiv());

// 5
//     let country = {
//         name: 'Ukraine',
//         language: 'ukrainian',
//         capital: {
//             name: 'Kyiv',
//             population: 2907817,
//             area: 847.66
//         }
//     };

//     function format(start, end) {
//         console.log(start + this.name + end);
//     }

//     format.call(country, '',''); // Ukraine
//     format.apply(country, ['', '']); // [Ukraine]
//     format.call(country.capital, '', ''); // Kyiv
//     format.apply(country.capital, ['','']); // Kyiv
//     format.apply(country.city, ['']); // undefined

// 6
//oбъект c полем name
// var user = {
//     name: "Tom"
//  };
 
//  //функция format с параметрами start и end
//  function format(start, end) {
//     console.log(start + this.name + end);
//  }
 
//  //привязка контекста с помощью анонимной функции
//  var tomFormat = function(start,end){
//                      format.apply(user,[start,end])
//                  }
//  tomFormat("<<<", ">>>"); // <<<Tom>>>
 
//  //привязка контекста с помощью метода bind()
//  var tomFormat2 = format.bind(user)
//  tomFormat2("<<<", ">>>");

//7
    // var hello = function(greeting) {
    //   return function(name) {
    //       return function(sign){
    //         console.log(greeting + sign + name);
    //       }
    //   };
    // };

    // hello("Hi there")(" Artem")(',');