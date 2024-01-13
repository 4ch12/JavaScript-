/*let num = 42
let firstName = 'Pavlo'
const isProgramist = true */

/* Can do
let $ = 'test'
let $num = 42
let num$=42
let _ = 49
let _num = 12
let num_ = 12
//let first_name = 'Elena' // error for rule write codding 
let myNum = 10 //good
*/

/* Restricted NameOfVariables
let 42num = '11' //error because variables name start with number
let my-num = 1 // error because hyphen use in variables name
service words in name of variables forbiden  use
*/

/* firstName = 'Max'
isProgramist = false //ERROR because  of const
*/

/* alert(firstName)
console.log("test",firstName, num)*/

/* console.log(num+10)
// console.log(num-10)
// console.log(num/10) // float for 
// console.log(num*10)*/

/*let num2 = num+10
console.log(num, num2)
num = num2 + 1
console.log(num, num2) */

/*let num3 = (num + (10*2))/5 - 1
console.log(num, num3)*/

/*const fullName = firstName+ " Chausov "
console.log(fullName)
*/


/*console.log(resultElements.textContent)
resultElements.textContent = 42

resultElements.textContent 
*/

const resultElements = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit'); // получение кнопку по айди из html



submitBtn.onclick = function (){
    const sum = Number(input1.value) + Number(input2.value)
    resultElements.textContent  = sum 
}
