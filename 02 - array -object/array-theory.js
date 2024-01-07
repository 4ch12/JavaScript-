//const names = ['Владилен', 'Елена', 'Игорь', 'Ксения']
//names.push('Хер')// додає елемент в кінець масиву
// names.unshift('Хер')// додає елемент в початок масиву
//names.shift()//  витягує перший  елемент з масиву

// const firstName = names.shift()
// const firstName = names.pop()//  витягує  останній 
// елемент з масиву і додає в окрему зміну
// console.log('Names: ', names, firstName)

// console.log(names.reverse()) //old method output an array from the end
// const reversed = names.toReversed()//new method  output an array from the end

const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.sort(function(a,b){ 
//     return a.charCodeAt(0) - b.charCodeAt(0)//порівняння строк індексів масивів за символами.
// }))
// console.log(letters.toSorted())// мутує массив
// console.log(letters)



// names.push('d')
// console.log(names)

// console.log(names.splice(2, 2))// first parametrs it is numer of index 
//and second parametrs it is numer how many element of array will be delete after index 

// console.log(names.toSpliced(0, 2))// create new array and donts change old array
// 
// console.log(names)

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// //console.log(index)
// const newNames = names.map(index, 'Елена Великая')
// находим елемент по индексу и изменяем его в новом массиве

// names[index] = 'Елена Великая' // находим елемент по индексу и изменяем его в текущем массиве
// console.log(names[index])
// console.log(names)

// console.log(names)
// console.log(newNames)

// const CapitalNames = names.map(function(name, index){ //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// // const newNames = name + '!'
// if(index === 1){
//     return 'Елена Великая'
// }
// return name
// // return name.toLowerCase()
// })
// console.log(CapitalNames)


// console.log(name.includes("Игорь")) // перевірка чи є такий елемент в массиві
//  чи ні, якшо є то виводиться false тільки для простих даних (Не обʼєктів)


// console.log(name.indexOf("Игорь") !== -1)

const people = [
    {name: 'Владилен', budget: 4200},
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксения', budget: 7520},
]

// console.log(people.indexOf({name: 'Ксения', budget: 7520}))

// let findedPerson

// for (let person of people) { for...of выполняет цикл обхода итерируемых объектов   вызывая на каждом шаге итерации операторы для каждого значения обʼєкта


//     if(person.budget === 7520)
//     findedPerson = person
// } // не треба так робити 

// const findedPerson = people.find(function(person){
//     return person.budget === 7520

//     // if(person.budget === 7520){
//     //     return true
// //}
// })
// console.log(findedPerson)

// const finded = people.find((p) => p.budget === 7520)


// const finded = people.findIndex(function(person){ // повертає індекс  з масива
//     return person.budget === 7520
// })

// console.log(people.with(finded, 42))

// let sumBudget = 0
// const filtered =  people.filter(function(p){
//     return p.budget >5000
// }
// )
// console.log(filtered)

// filtered.forEach (function(p){
// sumBudget += p.budget
// }
// )


// const sumBudget = people
//     .filter((p) => p.budget > 5000)
//     .map((p) => p.budget)
//     .reduce((acc,p) => acc+p, 0)
// console.log(sumBudget)

// const string = 'Привет, как дела?'
// const reversed = string
//   .split("")
//   .toReversed()
//   .join("!")
//   .split("")
//   .filter((c) => c !== "!")
//   .join('')

// // Метод split() разбивает объект String на
// // массив строк путём разделения строки указанной подстрокой.
// //toReversed - перевернуть строку
// // join - метод соединяющий массив 
// console.log(reversed)




