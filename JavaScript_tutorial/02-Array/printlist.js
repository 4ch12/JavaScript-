const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

//console.log(inputElement.value)
// const notes = ['записать блок про масивы', 'рассказать теорию обьектов']
// function render (){
//   /*  for( let indexArray = 0;indexArray < notes.length; indexArray++  ) {
//         listElement.insertAdjacentHTML('beforeend',getNoteTempate(notes[indexArray]))
//     } */
//     for(let note of notes){
//         listElement.insertAdjacentHTML('beforeend',getNoteTempate(note))
//     }
// }
// render()

// createBtn.onclick = function () {
//     if(inputElement.value.length === 0){
//         alert('write somthing in the input field')
//         return
//     }
//     listElement.insertAdjacentHTML('beforeend',getNoteTempate(inputElement.value)
//   )
//     inputElement.value = ''

// }

//     function getNoteTempate(title){
//         return   `
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//         >
//          <span>${title}</span>
//          <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>
// `
//     }

const notes = [
  {
    title: "записать блок про масивы",
    completed: false,
  },
  {
    title: "рассказать теорию обьектов",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
if( notes.length === 0){
    listElement.innerHTML = '<p>Нет элементов</p>'
}
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML(
      "beforeend",
      getNoteTempate(notes[i], i)
    );
  }
  //   for (let note of notes) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTempate(note));
  //   }
}
render();

createBtn.onclick = function () {
    
  if (inputElement.value.length === 0) {
    alert("write somthing in the input field");
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote); //add new object in array
  inputElement.value = "";   
  render();
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed
    } else  if (type === "remove") {
      notes.splice(index,1)
      }
      render()
  }
};

function getNoteTempate(notes, index) {
 // console.log(notes.completed);
  return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
         <span class = "${notes.completed ? "text-decoration-line-through" : "" }">${notes.title}</span>
            <span>
                    <span class="btn btn-small btn-${notes.completed ? 'warning' : 'success'}" 
                        data-index = "${index}" 
                        data-type ="toggle">&check;
                    </span>
                    <span class="btn btn-small btn-danger" 
                        data-index = "${index}"
                        data-type ="remove">&times;
                    </span>
            </span>
    </li>
`;
}
