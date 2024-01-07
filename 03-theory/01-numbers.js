/* const num = 42 // integer
const float = 42.42// float
const pow = 10e3// 10 в 3 степени
const big = 1_000_000
const negative = -100


// console.log(pow)
// console.log(num)
// console.log(big)
//console.log(negative)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53)-1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(1/0)

console.log(Number.isFinite(1/0))

console.log(12/undefined)

const weird = 12/undefined


console.log(Number.isNaN(weird))
console.log(Number.isNaN(12))
// console.dir(Number)
*/

// const strInt = '42'
// const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))

// console.log(parseInt(strInt))
// console.log(parseInt(strFloat))
// console.log(parseFloat(strFloat))

// console.log(+strInt, +strFloat)

// console.log(parseFloat((0.1 +  0.2).toFixed(10)))


// BigInt 
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 993243423n)
// console.log(-42n)

// // console.log(-42.42n)// error
// // console.log(10n-4)// error
// console.log(parseInt(10n)-4)// 
// console.log(10n-BigInt(4))// 
// console.log(5n/2n)// 
// console.log(5/2)// 

//MATH
// console.log(Math.E)// 
// console.log(Math.PI)// 
// console.log(Math.sqrt(25))// корень из 25

// console.log(Math.pow(2, 3))//  2 це число, 3 це степень

// const myNum = 4.9

// console.log(Math.abs(-42))//  модуль -42
// console.log(Math.max(2, 5, 42, 199, 0))//  возвращает максимальное значение 
// console.log(Math.min(2, 5, 42, 199, 0))//  возвращает минимальное значение 


// console.log(Math.floor(myNum))//   метод округление в меньшую сторону
// console.log(Math.ceil(myNum))//   метод округление в большую сторону
// console.log(Math.round(myNum))//   метод округление в до ближайшего 1,2 буде 1 , якщо 1,9 то буде 2
// console.log(Math.trunc(myNum))//   метод отсечения числа после запятой
// console.log(Math.random())//   метод рандома



// function getNumberRandom(min, max){
//     return Math.floor(Math.random()  * (max-min +1 )+ min)
// }

// const num1 = getNumberRandom(10, 100)

// console.log(num1)


