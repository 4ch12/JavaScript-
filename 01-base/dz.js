//=======Задание 1

// var a = 5
// let b = 10
// const c = 13
// console.log(a, b, c)
// a = 10
// b = 15
// //Константу не возможно переприсвоить ошибка из консоли Uncaught TypeError: Assignment to constant variable.     После удаления строчки, где было переприсвоение, в консоль вывелись все переприсвоенные значения. var a = 5 let b = 10 const c = 13 console.log(a, b, c)  a = 10 b = 15  console.log(a, b, c)
// console.log(a, b, c)


//========Задание 2

/*
const a = 100;
a = 20;
console.log(a); //Неперехваченная ошибка типа: присвоение постоянной переменной.
console.log(a)
let a = 15;
console.log(a);//Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(a);
var a;
a = 10;
console.log(a);
Змінні, оголошені letдоступними лише всередині блоку, де вони визначені.
Змінні, оголошені, varдоступні у всій функції, у якій вони оголошені.
*/

//=========Задание #3
//Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):
// let productName = 'Pivo' //название товара.
// let productPrice = 100 //стоимость.
// let productQuantity = 3 // количество купленного товара.

// let resultCost = productPrice*productQuantity // итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
// console.log("Вы купили "+productName+" "+productQuantity+ " шт. "+productPrice+" по " + ' грн. Всего было потрачено: '+resultCost+' грн')
// //console.log(Вы купили {productName} ({productQuantity} шт.) по {productPrice} грн. Всего было потрачено: {resultCost} грн)

//=================Задание #4
//Выведите в консоль следующие выражения:


// console.log(typeof 'Hello')
// console.log(typeof 10)
// console.log(typeof {})
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof true)
// console.log(typeof [])
// console.log( typeof (() => {}))

// string
// dz.js:45 number
// dz.js:46 object
// dz.js:47 object
// dz.js:48 undefined
// dz.js:49 boolean
// dz.js:50 object
// dz.js:51 function

//Задание #5
//Выведите в консоль следующие выражения:
// const a = {};
// const b = a;
// console.log(a === b);

// const a = 10;
// const b = 10;
// console.log(a == b);

// const a = 10;
// const b = 10;
// console.log(a != b);

// const a = 12;
// const b = "hi";
// console.log(a == b);

// const a = 10;
// const b = 11;
// console.log(a < b);
// true

// const a = 12;
// const b = 20;
// console.log(a > b); false

// const a = true;
// const b = true;
// console.log(a && b); //Логический оператор AND (&&) (логическое соединение) 
//для набора логических операндов будет истинным тогда и только тогда
//, когда все операнды истинны. В противном случае это будет ложью.

// const a = true;
// const b = false;
// console.log(a && b) ; false

// const a = false;
// const b = true;
// console.log(a && b); false

// const a = false;
// const b = true;
// console.log(a || b); true

// const a = 51;
// const b = 50;
// console.log(a >= b)

// const a = {};
// const b = {};
// console.log(a == b)
// 1) Причина этого в том, что внутренне JavaScript на самом деле имеет два разных подхода к тестированию равенства. 
// Примитивы, такие как строки и числа, сравниваются по их значению, в то время как объекты, такие как массивы, даты и простые объекты, сравниваются по их ссылке. 
// Это сравнение по ссылке в основном проверяет, относятся ли указанные объекты к одному и тому же местоположению в memory.so

//2) не имеет никакого значения, используете ли вы == или === для сравнения объектов, потому что сравнение их всегда возвращает значение false.
//3)javascript сравнивает объекты по идентификатору, а не по значению. 
//Каждый объект, каждое {} отличается друг от друга. 
//То же самое относится и к массивам.

//Задание #6
//Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false. 
//Примечание. Нельзя использовать if...else и тернарный оператор. 

// let a = 20
// let b = 10
// console.log(a>b && a<b)


    

// var numm = 10
// function OddOrEven (numm) { return numm%2}
// function checkOddOrEven(numm) {
//     if (numm == 0) {
//         console.log("Четное")
//     }
// }

// // } else if (numm == 1) {
// //     console.log("Нечетное")
// //     numm+1
// //     console.log(numm)

//3. Основы JavaScript, ч. 2
//============Задание #1

// Создайте переменную a, присвоив в нее любое число. 

// Если значение переменной четное:
// выведите в консоль “Четное”
// Если значение переменной нечетное:
// выведите в консоль “Нечетное”
// Прибавьте к a + 1.
// Выведите обновленное значение a.
// let num = 120
// let remainder = num%2
// console.log(remainder)
// if (remainder == 0) {
//     console.log("Четное")
// }else if (remainder == 1) {
//     console.log("Нечетное")
//     num = num + 1
//     console.log(num)
// }

// function isOdd(num) { return num % 2;}
// console.log("1 is " + isOdd(1));
// console.log("2 is " + isOdd(2));
// console.log("3 is " + isOdd(3));
// console.log("4 is " + isOdd(4));
//1 represents an odd(нечетний) number, while 0 represents an even number.


//================Задание #2
// Напишите программу, которая последовательно выводит 
//числа в диапазоне [0, 1000], удовлетворяющие одному из условий:

// Число нечетное
// Число кратно 12




// let i
// for (i=0;i<=120;i=i+1)
// if (i%12 == 0 )
// console.log(i + "  Число кратно 12")




// if (remainder == 0) {
//     console.log("Четное")
// }else if (remainder == 1) {
//     console.log("Нечетное")
// }
// console.log(i)

//Задание #3

// Создайте массив со значениями 
// [1, 10, 15, -100, -23, 19, 15032].
// Получите из него новый массив, в котором 
// каждый элемент будет увеличен на 25%.
// Выведите оба массива в консоль.
// const arr = 
// const map1 = arr.map(x => (x/100) * 25) ;

// console.log(arr,map1)

// var myArray1 = [1, 10, 15, -100, -23, 19, 15032];
// var myArray = [1, 10, 15, -100, -23, 19, 15032];

// for (var i = 0; i < myArray.length; i++){
//     myArray[i] = myArray[i] * 0.25 + myArray[i];
// }

// console.log(myArray1,myArray);

// ==============Задание #4

// Создайте функцию, объявленную с помощью 
// ключевого слова function, с именем sayHello().
//  Она принимает в параметры name и возвращает 
//  строку вида: "Hello, {name}!".
// Если функция была вызвана без указания name, 
// то выведите строку "Hello, someone!".
// Закомментируйте функцию и напишите аналогичную, 
// но в виде стрелочной функции.




// function sayHello(name){
//     if (name == null){
//         return  ss = 'Hello, someone!' 
//     }
// return  ss = 'Hello ' + name
//  }

//  console.log(sayHello('Pavlo'))
//  console.log(sayHello())

//Arrows function 
// let name = (name) => (name != undefined) ? "Hello " + name : 'Hello, someone!' ;
// console.log(name("Pavlo"))
// console.log(name());


//=================Задание #5

//Напишите функцию calc(), которая принимает в параметры a и b, а также operation. 
//В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами. 

// function calc(a, b, operation) {
// switch(operation){
//     case '+':
//         return a+b
//     case '-': 
//         return a-b
//     case '*':
//         return a+b
//     case '/': 
//         return a-b
//     default:
//     console.log(`Sorry`);
// }
//}

//console.log(calc(1, 2, '+')); // 3
//console.log(calc(1, 2, '-')); // -1
//console.log(calc(2, 2, '*')); // 4
//console.log(calc(4, 2, '/')); // 2


//=================Задание #6

// Создайте переменную age, присвоив ей числовое значение.
// Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
// "Взрослый" — если age больше или равно 18
// "Детский" — если age меньше 18
// Выведите переменные в консоль.

// let age = 23
// let category = (age >= 18) ? "Взрослий" : "Детский";

// console.log(age)
// console.log(category)



// ===================Задание #7

// Создайте переменные a и b с числовыми значениями.
// Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).
// Выведите значение c в консоль.

// let a = 20
// let b = 3
// let c = a>b ? a : b;
// console.log(c)