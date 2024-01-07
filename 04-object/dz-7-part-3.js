/* Задание #1
// Напишите функцию sumNumbers(), которая 
// принимает произвольное количество чисел через 
//запятую и возвращает их сумму.



// function sumNumbers(...numbers) {
//     return numbers.reduce(((acc,p) => acc+p), 0 );
// }


// const result1 = sumNumbers(1, 2, 3, 4, 5, 1000000000000000000);
// const result2 = sumNumbers(10, 20, 30);
// console.log(result1); // 15
// console.log(result2); // 60



// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60
*/


/* Задание #2
// Напишите функцию findMaxValue(), которая 
// принимает массив чисел и находит максимальное
//  значение. Если массив пустой, то возвращается 
//  значение undefined.
const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30


const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

function findMaxValue(array){
    if (array.length == 0) {
return undefined
  } else {
    return Math.max(...array);
  }

}
*/

/* Задание #3
// Напишите функцию calculateAverage(), которая 
// принимает массив чисел и вычисляет их 
// среднее арифметическое. Если массив 
// пустой, то возвращается 0.

const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0

function calculateAverage(arrayNum) {
    if (arrayNum.length == 0) {
        return "0"
          } else {
            countLength = arrayNum.length
            sumArray = arrayNum.reduce(((acc,p) => acc+p), 0 );
            return sumArray/countLength
          }
}
*/

/* Задание #4
// Напишите функцию isPalindrome(), которая 
// принимает строку и возвращает true, если 
// она является палиндромом, иначе — false. 
// Примечание. Палиндром — строка, которая
// читается одинаково слева направо и справа налево. 

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false

function isPalindrome(str){

const  strRever = str.split("").reverse().join("");
if (strRever == str ) {
    return true
}else {
    return false

}
 
}
      */

//Задание #5
// Напишите функцию removeDuplicates(), которая 
// принимает массив и возвращает новый массив без дубликатов. 
// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// const emptyArray = [];

// function removeDuplicates(arr) {
//   let arr1 = [...new Set(arr)];
//   return arr1
// }

// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]
//  console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]
//  console.log(removeDuplicates(emptyArray));  // []





// Задание #6
// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:

// function createCounter(value) {
//   let currentValue = value
//   function inc() {
//     currentValue++;
//   }

//   function dec() {
//     currentValue--;
//   }

//   function get() {
//     return currentValue;
//   }

//   return { inc, dec, get };
// }


// const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7
