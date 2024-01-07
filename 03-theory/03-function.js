//Function Declaration

// function greet (name) {
//     console.log('Hello - ', name)
// }

// //Function Expression
// const greet2 = function (name) {
//     console.log('Hello - ', name)
// }

// greet("Vladilen")
// greet2("Vladilen")


// console.log(typeof greet)

//console.dir(greet)

// setTimeout(greet("Vladilen"), 1500)


// setTimeout(function(){
// console.log("Timeout")
// }, 1500)

// setTimeout(function(){
//     greet("Vladilen")
//     }, 1500)

// let counter = 0
// const interval = setInterval( function (){
//     if(counter === 5 ){
//         clearInterval(interval)
//     } else {
//        console.log( ++counter)
//     }
// }, 2000)

// Arrow function 

// function greet (name) {
//     console.log('Hello - ', name)
// }

// const arrow = (name, age) => {
//     console.log('Hello - ', name, age)
// }

// const arrow2 = (name) => console.log('Hello - ', name)
// arrow2('Vladilen', 11)

// function pow(num, exp) {
//     return Math.pow(num, exp)
// }

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2, 3))

//========Default parametrs  

const sum = (a=40,b=a / 2) => a + b 

// console.log(sum(40,2))
// console.log(sum())

function sumAll(...numbers) {

    // console.log(numbers)
    // let res = 0
    // for (let num of numbers){
    //     res+=num
    // }
    // return res
// return numbers.reduce((acc, cur) => (acc+=cur), 0)
    
}
// console.log(sumAll(1, 2, 3, 4, 5))

// //Closures функція в якій є ще одна функція 

// function createPerson(name){
//     return function(lastname){
//         console.log(name + ' ' +lastname)
//     }

// }
// const addLastName = createPerson('Vladilen')
// addLastName('Minin')
// addLastName('VV')