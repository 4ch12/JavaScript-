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
const people = [
  {name: 'Roma', budget: 8800},
  {name: 'Elena', budget: 4200},
  {name: 'Vlad', budget: 2300},
  {name: 'Uliana', budget: 3900},
]

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