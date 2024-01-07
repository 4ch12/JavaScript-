// Задание #1
// Дан объект машины. 
// Необходимо написать написать функцию,
// которая принимает объект машины и 
//возвращает строку с HTML, заполненную значениями переданного объекта. 

// let nameCar = document.getElementById('nameCar')
// let typeCar = document.getElementById('typeCar')
// let maxSpeedCar = document.getElementById('maximumspeedCar')
// let colorCar = document.getElementById('colorCar')

// const car = {
//     name: 'Hendai Solarisq',
//       type: 'sedanN',
//       maxSpeed: '320',
//       color: 'redDD',
//   }

// function displayCar (Car) {
//     // console.log(nameCar.textContent)
//     nameCar.textContent = Car.name
//     typeCar.textContent = Car.type
//     maxSpeedCar.textContent = Car.maxSpeed
//     colorCar.textContent = Car.color
//     // console.log(car.name)
// }

// displayCar(car)


//=====Задание #2

//Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

// const sentence = "Hello, how are you?";
// function countWords() {
//     words = sentence.split(' ')
//     return words.length
// }

// console.log(countWords(sentence)); // 4



//=============Задание #3
// Необходимо написать функцию getInitials(), которая принимает полное 
//имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

// const fullName = "John Doe";

// function getInitials() {
//     words = fullName.split(' ')
//     firstName = words[0].split("")
//     lastName = words[1].split("")
//     return firstName[0] + '.' + lastName[0]+ '.'
// }

// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// // Задание #4
// // Необходимо написать функцию generateGoogleString(),
// //  которая принимает число и возвращает сроку ”Google”
// // с указанным количеством букв “o”. 
// //  При этом минимальное количество букв “о” равно 2.

// function generateGoogleString(num) {
//     // Минимальное количество букв "о" равно 2
//   const minOs = 2;

// // Если число меньше или равно 2, возвращаем 'Google'
// if (num <= minOs) {
//     return 'Google';
//   }

//  // Если число больше 2, генерируем строку с заданным количеством "о"
// const oCount = minOs + num - 2; // Общее количество букв "о"
// const oString = 'o'.repeat(oCount); // Повторяем "o" указанное количество раз
// return `G${oString}gle`;
/*
    //  console.log (str.indexOf("o"))
    //  let smth = str
    //  .split('')
    //  .concat('jj')
    //  .join("")

    //  console.log (smth)
    // let promt = str.charAt(1) 

    // return "G"+ promt + 'o' + "gle"
    // for (let char of str) {
    //   console.log (char)
    // }
    for  (count = 2; count<10; count++){
        
        console.log (str)
        //return str
    }
    // let arr = ["I", "study", "JavaScript", "right", "now"];

    // // видалимо 3 перших елементи і замінимо їх іншими
    // arr.splice(0, 3, "Let's", "dance");
    
    // alert( arr ) // отримаєм ["Let's", "dance", "right", "now"]
    
       
        // "G"+  "o"  + 
 } */

   


// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // // Google

// console.log(generateGoogleString(-2));
// // // Google


// // // Задание #5
// // // Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв
// // //  (латинских и кириллических) в переданной строке. 

// const str = "Hello, Привет!";
// function countVowels() {

// const  vowel_list  =  'аиеёоуыэюяaeiouy'
// var  vcount = 0

// for ( var x = 0; x < str.length; x++) {
//     if (vowel_list.indexOf(str[x]) !== -1){
//         vcount += 1
//     }
    
// }
// return vcount;
// }

// console.log(countVowels(str)); // 4