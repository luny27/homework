// 1.Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.
// console.log( findLongestWordLength('Аргентина манит негра') );


// function str(strings){
//     let words = strings.split(' ');
//     console.log(words)
//     let length = 0;
//     for(let i = 0; i < words.length; i++){
//         let bukva = words[i].split('');
//         if(bukva.length > length){
//             length = bukva.length;
//         }
//     }
//     return length;
// }
// console.log(str('Аргентина манит негра республика '))

//2. Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их 
// var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
// console.log( result ); // "542 -214"


// let highAndLow = (args) => {
//     let numbers = args.split(' ');
//     console.log(numbers);
//     let lowest = args[0];
//     let highest = args[0];
// 	for (let i = 1; i<numbers.length; i++) {
//         numbers[i] = +numbers[i]
// 		if (numbers[i]<lowest) {
// 			lowest = numbers[i];
//         }
//         if (highest<numbers[i]){
//             highest = numbers[i];
//         }
// 	}
// 	return highest + ' ' + lowest;
// }

// var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 9 -6");
// console.log(result);

//3. Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.
// let foo = number => {
//     //console.log(number);
//     let newMassive = [];
//     for (var i = 1; i < number.length; i++) {
//       newMassive[i-1] = number[i]
//     }
//     return newMassive;
//   }

//   console.log(foo(['1', '2', '3', '4']));


// 4.Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
// let foo = number => {
//     let param = ['9', '8', '7'];

//     console.log(number);
//     for (var i = 0; i < param.length; i++) {
//       number[number.length] = param[i];
//     }
//     return number;
//   }

//   console.log(foo(['1', '2', '3', '4']));


// 5.

// const source = {firstname: 'Tom', age: 10};

    // function ass(obj, firstname, lastname){

    //   let args = arguments[0];

    //   for (var i = 1; i < arguments.length; i++) {
    //     let arg = arguments[i];
    //     for(let key in arg){
    //       args[key] = arg[key];
    //     }
    //   }

    //   return args;
    // }

    // console.log(ass(source, {firstname: 'John'}, {lastname: 'Doe'}));

// 6.

// function foo() {
// 	function bar(a) {
// 	let	i = 3;
// 		return i + a;
// 	}
	
// 	for (let i = 0; i < 10; i++) {
// 		console.log( bar(i * 2) );
// 	}
// }

// foo();
