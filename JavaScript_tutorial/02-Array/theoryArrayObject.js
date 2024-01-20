//Theory of Array
// const arrayString = ['a','b','c',null,12]
// const arrayNew = new Array(1,2,3,4,5,6)
// console.log(arrayString)
// console.log(arrayNew)

// const array = [1,2,3,4,5]
// // console.log(array.length)

// console.log(array[array.length-1])
// array[0] = 'Privet'
// console.log(array)

// array[array.length] = 'becon'
// console.log(array)
// var log = console.log;
/**Theory of Object
const person = {
  firstName: "Vladlen",
  lastName: "Minin",
  year: 1999,
  hasGirlfriend: false,
  language: ["en", "de"],
  getFullName: function () {
    console.log(person.firstName + " " + person.lastName);
  },
};
log(person.year) 
log(person['language']) 

const key = 'hasGirlfriend'
log(person[key]) 
person.hasGirlfriend =true
log(person[key]) 

// log(typeof person)
*/
/**method of Array - object */
// const names = ['elena','john','Pavlo','Maria']

// names.push('Bogdan')
//const firstName = names.shift() //извлекает из масива первый елемент
//const firstName = names.pop() //извлекает из масива последний елемент retrieves the last element from an array
// + меняет весь массив и сохраняет в отдельные переменные
//console.log('Names: ', names, firstName)

//console.log(names.reverse())//переворачивает массив наоборот reverses the array
// const reversed = names.toReversed();
// console.log(reversed)
// console.log(names)//

// const letters = [ 'e','d','c','b','a']   
// console.log(letters.tosorted())//соритровка без изменения масива
// console.log(letters)


// console.log(names.splice(2,2))//удаление масива
// console.log(names)

// const greateWoman = 'elena'
// const index = names.indexOf(greateWoman)// узнать индекс под которым храниться значение 'elena'
// const newNames = names.with(index,'elena AN')//обращение к масиву по индексу НЕизменяя текущий масив names

// console.log(index)// вывод индексв

// console.log(newNames)// вывод индексa
// console.log(names)// вывод индексв


//names[index] = 'elena AN'// изменить значение полученного индексаа
// console.log(names[index])// обращение к масиву по индексу изменяя текущий масив names
// console.log(names) //вывод масива

// const capitalNames = names.map(function (name, index){ // map всегда возвращает новый массив с изменнеными данными
//   // return name.toUpperCase()
//  if (index === 1){
//   return 'elena AN'
//  }
//  return name
// })
// console.log(capitalNames)
// console.log(names)

// console.log(names.includes('elena'))//есть ли елемент в массива, если да отвечает тру
// console.log(names.indexOf('elena') ==! -1 )


/*OBJECT*/
// const people = [
//   {name: 'Roma', budget: 8800},
//   {name: 'Elena', budget: 4200},
//   {name: 'Vlad', budget: 2300},
//   {name: 'Uliana', budget: 3900},
// ]
// console.log(people)
// let findedPerson
// for (let person of people){
// if (person.budget === 2300){
// findedPerson = person
// }
// }

/**Method find */
// const findedPerson =people.find((p) => p.budget === 3900 )
// const findedPerson = people.find(function(person){
//   return person.budget === 2300 })

/**Method findIndex */
// const findedPerson = people.findIndex(function(person){//findIndex возвращает индекс обьекта 
//   return person.budget === 2300
// })

// //console.log(people[findedPerson]) // возвращает найденный объект
// console.log(people.with(findedPerson,{
//   "name": "Roma",
//   "budget": 8800
// }))

/**Method Filter */
// const filtered = people.filter(function(p) {
// return p.budget > 3901
// })
// console.log (people)
// console.log(filtered)

// let sumBudget = 0

// const filtered = people.filter(function(p) {
// return p.budget > 3901
// })
// console.log (filtered)
// filtered.forEach(function(p){ // делаем итерацию с помощью forEach
//   sumBudget += p.budget
// }) // 
// console.log (sumBudget)
/*Arrow function for objects of array*/
// const byBudget = p => p.budget > 3901
// const pickBudget =  p => p.budget

// const sumBudget = people
//   .filter(byBudget)
//   .map(pickBudget)
//   .reduce((acc, p) => acc+p,0)
// console.log (sumBudget)

// const string = 'Привет, как дела?'
// const reversed = string
//   .split("")
//   .toReversed()
//   .join("!")
//   .split("")
//   .filter((c) => c === !"!")
//   .join('')
// console.log (reversed)

/*Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, 
возрастом и именем питомца соответственно.

Создайте функцию, которая в параметры принимает объект человека (john или ann),
 и в качестве результата выводит информацию о нем в консоль:

“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека и 
увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.*/

// const john = {
//   name: 'John',
//   age: '21',
//   pet: 'Fufik'
// }
// const ann = {
//   name: 'Ann',
//   age: '23',
//   pet: 'Zhopik'
// }

// function outputConsole (person){
//   console.log(`Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`)
// }
// outputConsole (ann)

// function incrementAge(age) {
//   console.log(age++)
// }
// incrementAge(ann.age)

// for (key in john){
//   console.log( key + " " + john[key])
// }

// const john = {
//   name: 'John',
//   age: 22,
//   pet: 'cat'
// };

// const ann = {
//   name: 'Ann',
//   age: 24,
//   pet: 'fish'
// };

// const info = ({name, age, pet}) => 
// console.log(`Меня зовут ${name}, мне ${age}, у меня есть питомец ${pet}`);

// const incrementAge = people => people.age++;

// const display = people => {
//   for(const [key, value] of Object.entries(people))
//       console.log(`${key}: ${value}`);
// }

// display(john);

// Задание #2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает 
// сумму его элементов:

// function sum(array) {
//  console.log( array.reduce((acc, p) => acc+p,0))

// }

// const arr = [1, 50, 20, 75, 90];

// sum(arr); // 23

// Задание #3

// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.

// const names = []
// names.push('b')
// names.push('b1')
// names.push('b2')
// names.push('b3')
// console.log(names)

// names.shift()
// names.pop()

// console.log(names);

// Задание #4
// Дан массив names. Необходимо сделать функцию, которая на основе 
// этого массива генерирует строку c HTML. Она представляет из себя список 
// элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
const render = names => `<ul>${names.map(i => `<li>${i}</li>`).join('')}</ul>`;

console.log(render(names))

