//let num = 42
// let  firstName = 'Pavlo'// string
// const isProgrammer = true// boolean

/*Can DO
let $ = 'test'
let $num = 42
let num$ = 12
let _ = 43
let _mum = 43
let first_name = 'Elena' //bad
let myNum = 34 //good
*/

/* Restrocted 
let 42num = '11'
let my-num = 34
let const 
*/

/*firstName = 'Max'
isProgrammer = false
alert(firstName)
console.log(firstName)
*/

/* console.log(num+10);
// console.log(num-10);
// console.log(num*10);
// console.log(num/10);
console.log(num)
*/

/*let num2 = num + 10
console.log(num, num2)

num = num2 - num
console.log(num,num2)// різниця між двома числами
*/

/* let num3 = (num+10*2)/(5-1)
 console.log(num3)
const fullName = firstName + " Minin"
const fullName = firstName + '\n' + "Minin"
console.log(fullName)*/

/*console.log(resultElement.textContent)
resultElement.textContent = (42-2)/num*/
/*console.log(input2.value)
console.log(typeof sum)
*/

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
action = '+'


minusBtn.onclick = function() {
    action = '-'
    }

plusBtn.onclick = function() {
    action = '+'        
 }

multiplicationBtn.onclick = function() {
    action = '*'
    }

divisionBtn.onclick = function() {
    action = '/'        
 }

 function  printResult(result){
    console.log("Result to print",result)
    if (result < 0){
        resultElement.style.color ='red'
      } else {
        resultElement.style.color ='green'
      }
      resultElement.textContent = result
 }
function computeNumbersWithAcrion(inp1, inp2, actionSymbol){
    const num1 = +inp1.value
    const num2 = +inp2.value
    console.log(typeof num1, num2)
    // if(actionSymbol =='+'){
    //    return  num1+num2
    // } else if(actionSymbol == '-'){
    //    return num1-num2
    // }else if(actionSymbol == '*'){
    //     return num1*num2
    //  }else if(actionSymbol == '/'){
    //     return num1/num2
    //  }
    debugger

    const result = actionSymbol = '+' ? num1 + num2 : num1 - num2
    return result
}

submitBtn.onclick = function() {
    const result = computeNumbersWithAcrion(input1,input2,action)
    printResult(result)
//     if (action == '+'){
//  const sum = Number(input1.value) + Number(input2.value)
//  printResult(sum)

//     } else if (action == '-'){
//  const sum = Number(input1.value) - Number(input2.value)
//  printResult(sum)
//     }
    
}



