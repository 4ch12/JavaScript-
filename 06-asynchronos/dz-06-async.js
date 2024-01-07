// Задание #1

// Определите порядок вывода в следующем фрагменте кода без его запуска. 

// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');
// Определите для себя, почему вывод произошел именно в таком порядке.

// Задание #2

// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 

// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 

// Задание #3

// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API. 

// function sumWithDelay() {
//   // Ваш код здесь...
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();
// Задание #4

// Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

// const USERS = [
//   { id: '001', name: "Алексей", age: 25 },
//   { id: '002', name: "Иван", age: 28 },
//   { id: '003', name: "Егор", age: 30 },
// ];

// function fetchUser(id) {
//   // Ваш код здесь...
// }

// async function start() {
//   // ...
//   const result = await fetchUser('001');
//   console.log(result); // { id: '001', name: "Алексей", age: 25 }
//   // ...
// }

// start();
