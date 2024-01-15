
/* Задание #1

Необходимо создать 3 переменных: var a, let b, const c и присвоить им значения 5 , 10, 13 соответственно.
Выведите все три переменные с помощью console.log().
После вывода присвойте переменным a, b и с новые значения, затем выведите их в консоль и посмотрите, что получилось. 
В случае возникновения ошибок удалить “проблемное” выражение.


var a = 5;
let b = 10;
const c = 13;

console.log(a);
console.log(b);
console.log(c);

a = 11;
b = 12;
c = 13;

console.log(a);
console.log(b);
console.log(c);

*/

/*Задание #2
Последовательно запустите следующие фрагменты кода и посмотрите, что получилось:

Определите для себя, почему в этих 3-х случаях произошел тот или иной результат выполнения.


const a = 100;
a = 20;//app.js:80 Uncaught TypeError: Assignment to constant variable.
console.log(a);

console.log(a)//app.js:83 Uncaught ReferenceError: Cannot access 'a' before initialization
//Когда интерпретатор JavaScript сталкивается с кодом, использующим let или const, он не поднимает
 их в начало блока кода. Поэтому в момент вызова console.log(a), 
переменная a еще не определена, и это приводит к ошибке "ReferenceError".
let a = 15;
console.log(a);


console.log(a); // Выводится "undefined", потому что переменная 'a' была поднята, но ей еще не было присвоено значение
var a;
a = 10;
console.log(a); // Выводится "10", потому что 'a' теперь имеет значение 10*/

/*Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽” 

productName = "чашки"
productPrice = 10
productQuantity = 100
resultCost = productPrice * productQuantity

//console.log( "Всего было потрачено: " + resultCost + "₽”)
console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`);
*/

/*Задание #4

Выведите в консоль следующие выражения:

typeof 'Hello'
typeof 10
typeof {}
typeof null
typeof undefined
typeof true
typeof []
typeof (() => {})
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.  

console.log (typeof 'Hello') // string
console.log (typeof 10) // number
console.log (typeof null) // object
console.log (typeof undefined) //undefined
console.log (typeof true) // boolean
console.log (typeof []) //object
console.log (typeof (() => {})) // function 
*/

/* Задание #5

Выведите в консоль следующие выражения:

10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
Сравнение по ссылке:

const a = {};
const b = a;
console.log(a === b);
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод. 


console.log(10 == 10); // true 
console.log(10 != 10); // false
console.log(12 == 'Привет'); // false 
console.log(10 < 11); // true
console.log(12 > 20); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(true || false); // true
console.log(10 <= 10); // true
console.log(18 <= 20); // true
console.log(50 >= 50); // true
console.log(51 >= 50); // true
//console.log({} === {});//Это условие всегда будет возвращать ''false'', так как JavaScript сравнивает объекты по ссылке, а не по значению.
console.log({} == {}); // В JavaScript оператор == сравнивает объекты по ссылке, а не по содержимому. Даже если два объекта содержат идентичные свойства и значения, они будут считаться разными, если это разные объекты в памяти.
*/

/* Задание #6

Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false. 

Примечание. Нельзя использовать if...else и тернарный оператор. 


var firstNumber = 1
var secondNumber = 2 
console.log(firstNumber>secondNumber) //false
*/

// Основы JavaScript. Часть 2

/* Задание #1

Создайте переменную a, присвоив в нее любое число. 

Если значение переменной четное:
выведите в консоль “Четное”
Если значение переменной нечетное:
выведите в консоль “Нечетное”
Прибавьте к a + 1.
Выведите обновленное значение a.

var a = 9
if ( a%2===0) {
console.log('Четное')
} else {
    console.log('Нечетное')
    a++
    console.log('a =', a)
}
*/

/*Задание #2

Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], 
удовлетворяющие одному из условий:

Число нечетное
Число кратно 12 
for(let i = 0; i < 100; i++) {
	if((i % 2 !== 0) || (i % 12 === 0)) {
		console.log(i);
  }
}
*/

/*Задание #3


Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
Выведите оба массива в консоль.

const arr = [1, 10, 15, -100, -23, 19, 15032]
const newArr = []

for (const i of arr){
    newArr.push(i*1.25)
}
console.log(arr)
console.log(newArr)
*/

/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). 
Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции. 
*/

/*function sayHello(name = 'someone') {
    console.log(`Hello, ${name}!`)
}

sayHello('ljl')

const sayHello = (name = 'someone') => {
    console.log(`Hello, ${name}!`);
  };*/
/*Задание #5
Напишите функцию calc(), которая принимает в параметры a и b, а также operation. 
В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.
*/ 

/*function calc(a, b, operation) {

const num1 = a
const num2 = b
if(operation === '+'){
    return num1 + num2
}else if (operation === '-'){
    return num1 - num2
}else if (operation === '*'){
    return num1 * num2
}else if (operation === '/'){
    return num1 / num2
}
  }
  
  console.log(calc(1, 2, '+')); // 3
  console.log(calc(1, 2, '-')); // -1
  console.log(calc(2, 2, '*')); // 4
  console.log(calc(4, 2, '/')); // 2
*/

  /*Задание #6

Создайте переменную age, присвоив ей числовое значение.
Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
"Взрослый" — если age больше или равно 18
"Детский" — если age меньше 18
Выведите переменные в консоль. */

// const age = 24
// const category = age < 18 ? 'Детский' : 'Взрослый'
// console.log(age, category);

/*Задание #7

// Создайте переменные a и b с числовыми значениями.
// Создайте переменную c, в которую с помощью тернарного оператора 
присвоите наибольшее значение (или a, или b).
// Выведите значение c в консоль.
*/

// const a = 10
// const b = 2
// const c = a > b ? a : b 
// console.log(c)