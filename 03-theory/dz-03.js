//==========Задание #1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, 
// если оно простое, иначе — false.
// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, 
// кроме 1 и самого себя.


// function isPrimeNumber(a){
//    if( a >= 1 && a%a != 1 && a/a == 1)  {
//     return true
//    } return  false
// }

// console.log(isPrimeNumber(1))

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//   }
//   return num > 1;
// }
// console.log(isPrime(3))


// =========Задание #2

// Напишите функцию func(), которая принимает num, min, max:
// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.



// function func(num, min, max) {
//     if(num<min) {
//         return min**2 + "num<min"

//     } else if(num>max) {
//         return max**2 + "num>max"

//     } else if(num<max-(max-min)/2) {
//         return num**2 + "num<max-(max-min)/2"

//     } else  return Math.floor(num)+ "Math"
// }
// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8
// const func = (num, min, max) => {
// 	if (num < max - (max - min) / 2)
// 		return num ** 2;
// 	if (num < min)
// 		return min ** 2;
// 	if (num > max) 
// 		return max ** 2;
// 	return 0;
// }

// switch (num<min, num>max, num<max-(max-min)/2) {
//     case num<min:
//     return  console.log(min**2 + "num<min")

//     case num>max:
//     return console.log(max**2 + "num>max")

//     case num<max-(max-min)/2:
//     return console.log(num**2 + "num<max-(max-min)/2")
    
//     default: console.log(Math.floor(num+"Math"))
// }
  


// Задание #3

// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, 
//если число является совершенным, и false в противном случае.
// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей 
//(за исключением самого числа). 
//Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.


/*
1. Проверить число на целое, значит без остатка
2. Проверить число на положительное
3. Возвращать true,
4. Если число является совершенным, и false в противном случае.
4.1 Совершенное число — это число, равное сумме всех своих положительных делителей.((за исключением самого числа). 
 Посчитатть все положительн делители)
 Вычеслить сумму всех положительн. делителей.
5. Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

*/



  
  // 1. Проверить число на целое, значит без остатка
  // 2. Проверить число на положительное
  //  if (number%2 === 0 ? true : false && number > 0 ? true : false) {
  //   return true
  //  } else return false

// 4.1 Совершенное число — это число, равное сумме всех своих положительных делителей.((за исключением самого числа). 
//  Посчитатть все положительн делители)
//  Вычеслить сумму всех положительн. делителей.

// function isPerfectNumber(number) {

// Sum = []
//  for (let i = 1; i+1 <= number; i++){

//     if(number % i == 0 ){  
//       Sum.push(i)
//       // console.log(Sum)
     
//     } else return  Sum.reduce((acc,p) => acc+p, 0) == number 
  
//  }

// }

// const isPerfectNumber = num => {
//   const a = [];
//   for(let i = 1; i > num; i++) {
//       if(num % i === 0) {
//           a.push(i);
//       }
//   }
//   return a.reduce((a, b) => a + b, 0) === num;	
// }
// console.log(isPerfectNumber(6))
// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false




// Задание #4
// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). 
// Возвращает она цифру числа number, находящуюся на позиции digitPosition. 
// Если происходит попытка чтения числа на позиции, которой не существует 
// (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.
// Примечание. Нельзя использовать приведение числа к строке.

// function getNumberDigit(number, digitPosition) {
//   // Ваш код здесь...
//   arr = [...'' + number]
//   arr1 =  arr.map(Number)
//   console.log(arr1) 
//   console.log(arr1[digitPosition])
// }

// getNumberDigit(123, 0) // 1
// getNumberDigit(123, 1) // 2
// getNumberDigit(123, 2) // 3
// getNumberDigit(1, 2) // undefined



