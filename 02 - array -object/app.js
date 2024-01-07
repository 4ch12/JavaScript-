// // // Theory

// // const array = [1,2,3,5,20,42,111]
// // // const arrayStrings = ['a', 'b', null]

// // // const array = new Array(1,2,3,5,20,42)

// // // console.log(array.length)
// // // console.log(array[10])

// // console.log(array[0])
// // console.log(array[array.length-1])
// // array [0] = 'Privet'
// // console.log(array)

// // const inputElement = document.getElementById('title')
// // const createBtn = document.getElementById('create')
// // const listElement = document.getElementById('list')

// //console.log(inputElement.value)

// // const notes = ['записать блок про масивы','рассказать теория обʼєктов']

// // function render() {
// //     // for (let i = 0; i < notes.length; i++  ) {
// //     //     listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i]))
// //     // }

// //     for (let note of notes) {
// //         listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes))
// //     }
// // }


// // render ()

// // createBtn.onclick = function(){
// //     // listElement.innerHTML = 
// //     if (inputElement.value.length === 0 ) {
// //         return
// //     }
// //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value)
// //     )
// //     inputElement.value = ''
// // }

// // function getNoteTemplate(title){
// //     return ` 
// //     <li
// //         class="list-group-item d-flex justify-content-between align-items-center"
// //      >
// //         <span>${title}</span>
// //         <span>
// //             <span class="btn btn-small btn-success">&check;</span>
// //             <span class="btn btn-small btn-danger">&times;</span>
// //         </span>
// // </li>
// //     `
// // }


// /**
//  * Object Theory


// const person = {
//     firstName: 'Vladilen',
//     lastName: 'Minin',
//     year: 1993,
//     hasGirlfriends: false,
//     languages: ['ru', 'ua', 'en'],
//     getFullName: function () {
//         console.log(person.firstName + ' ' + person.lastName)
//     }
// }

// console.log(person.year)
// console.log(person['languages'])

// const key = 'hasGirlfriends'
// console.log(person[key])


// person.hasGirlfriends = true
// console.log(person[key])

// person.getFullName()

//  */
// // console.log(typeof notes)

// const inputElement = document.getElementById('title')
// const createBtn = document.getElementById('create')
// const listElement = document.getElementById('list')

// const notes = [
//     {
//     title: 'записать блок про масивы',
//     completed: false,
//     },
//     {
//     title: 'рассказать теория обʼєктов',
//     completed: true,
//     },
// ]

// function render() {
//     listElement.innerHTML =''// очистка до завантаження масива
//     if (notes.length ===0){
//         listElement.innerHTML = '<p> Нет елементов </p>'
//     }
//     for (let i = 0; i < notes.length; i++  ) {
//         listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i], i))
//     }

//     // for (let note of notes) {
//     //     listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(note))
//     // }
// }

// render()

// createBtn.onclick = function(){
//     // listElement.innerHTML = 
//     if (inputElement.value.length === 0 ) {
//         return
//     }
//     const newNote = {
//         title: inputElement.value,
//         completed: false,
//     }
//     notes.push(newNote) // додає новий елемент до кінця списку
//     render()// виклик метода, який перевіряє кількість елементів в масиві 
//     inputElement.value = '' }

// listElement.onclick = function (event){ // обработчик події кліку
//    // console.log(event.target.dataset) 
//    if (event.target.dataset.index){
//     const index = parseInt(event.target.dataset.index)
//     const type = event.target.dataset.type
//     if (type === 'toggle' ){
//         // console.log('toogle', index)
//         notes[index].completed = !notes[index].completed
//        } else if(type === 'remove'){
//         notes.splice(index, 1) //delete element in array


//        }
//        render()
//    }

// }
//  //else if (type ==='remove' ){
// //     console.log('remove', index)
    

// function getNoteTemplate(note, index){
//     // console.log(note.completed)
   
//     return ` 
//     <li
//         class="list-group-item d-flex justify-content-between 
//         align-items-center"
//      >
//         <span class="${note.completed ? 'text-decoration-line-through' : '' }">${
//             note.title
//     }</span>
//         <span>
//             <span class="btn btn-small btn-${
//               note.completed ? 'warning' : 'success'
//             }" data-index="${index}" data-type="toggle">&check;</span>
//             <span class="btn btn-small btn-danger" data-type="remove" 
//             data-index="${index}">&times; </span>
//         </span>
// </li>
//     `
// }

