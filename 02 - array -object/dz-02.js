// //Задание #1
// // Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

// const john = {name: 'Gosha', age: 21, pet: 'parrot'};
// console.log(john.name)

// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:
// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

// const JohnInfo = john => {
//     console.log("Меня зовут " + john.name + ", мне " + john.age +
//     ", у меня есть питомец " + john.pet)
// }
// JohnInfo(john)

// // const info = ({name, age, pet}) => console.log(`Меня зовут ${name}, мне ${age}, у меня есть питомецjjj ${pet}`);


// // Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

// const incrementAge = john =>{ 
//     john.age  += 1
// }
// // const incrementAge1 = people => people.age++;

// console.log(john.age)

// // Выведите циклом все названия свойств и их значения, которые есть у объекта john.
// for (const jLoop in john) {
//     /* ... делать что-то с obj[key] ... */
//     console.log("Ключ: " + jLoop + " значение: " + john[jLoop])
//   }


//=====Задание #2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов


// const arr = [1, 50, 20, 75, 90];
//   console.log(arr)

// //   const sumBudget = arr.reduce((acc,p) => acc+p, 0)
// //   console.log(sumBudget)
// //   let count = 0

// function sum(arr) {
//      for (let i = 0; i < arr.length; i++ ) {
//       count  += arr[i]
//     }
    
// }
  
  
//   sum(arr); // 236  
//   console.log(count)

//========Задание #3
// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.

// const names = ['Pavlo','Владилен', 'Елена', 'Игорь', 'Ксения']
// names.push('Ann');
// names.push('Bob');
// names.push('Vova');
// names.push('Roman');
// names.push('Alexey');
//  console.log('Перший масив --- ' +names)


// names.shift() // перший елемент прибирає з масіву
// console.log(names)

// names.pop() // останій елемент прибирає з масіву
// console.log(names)

//========Задание #4
// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
// const render = arr => `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>`;

// const listElement = document.getElementById('list')
// console.log(names)

// function render() {
//     for (let name of names) {
//             listElement.insertAdjacentHTML('beforeend',  getTemplate(name))
//             }
//     console.log(names[0])
//     }
    
// render()

// function getTemplate (name){
  

// return  `<li class="list-group-item d-flex justify-content-between align-items-center">

// <span>${name}</span>


// </li>`
// }

// =====Задание #5
// Дан объект:
//Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 
//Деструктуризация объекта (англ. object destructuring) — это особый синтаксис, позволяющий извлекать значения из объекта и записывать их в новые переменные с минимумом кода.

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const { age:age, favColor:favColor, height:height, pet:pet, money:money} = obj;

// console.log(age,favColor,height,pet,money )

//=========Задание #6
// Даны объекты:
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj. 

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450
// };

// const obj2 = { ...obj, ...updateObj };
// console.log(obj2);

// // function makeUser( age, favColor, height, pet, money) {
// //     return {
// //     age,  // те ж саме, що age: age
// //     favColor,
// //     height, 
// //     pet, 
// //     money
// //     };
// //   }


// // for (let key in obj) {}


// const obj2 = {
//     age: (updateObj.age !== obj.age) ? updateObj.age : 0,
//     favColor: (updateObj.favColor !== obj.favColor) ? updateObj.favColor : 0,
//     money: (updateObj.money !== obj.money) ? updateObj.money : 0,
//     height: obj.height,
//     pet: obj.pet,

// }
//  console.log(obj2);
/**


// let category = (age >= 18) ? "Взрослий" : "Детский";
const obj2 = makeUser (updateObj.age, updateObj.favColor); {
alert(obj2.age); 
alert(obj2.favColor); 

}
console.log(obj2);
   
// makeUser.age =  (updateObj.age !== obj.age) ? updateObj.age : 0;
// makeUser.favColor =  (updateObj.favColor !== obj.favColor) ? updateObj.favColor : 0;
// makeUser.money = (updateObj.money !== obj.money) ? updateObj.money : 0;

//   console.log(makeUser.age,makeUser.favColor, makeUser.money );
//alert( key in user ); // true, властивість "age" існує

    //alert( user.noSuchProperty === undefined ); // true означає "такої властивості немає"


 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */

// obj.push(updateObj.age, updateObj.favColor, updateObj.height )
// let sumBudget = 0
// const filtered =  people.filter(function(p){
//     return p.budget >5000
// // }
// )
// console.log(filtered)
