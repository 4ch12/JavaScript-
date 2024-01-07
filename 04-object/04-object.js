const person  = {
    name: 'Vladolen',
    age: 29,
    isYoutuber: true,
    languages: ['ru', 'en'],
    address:{
        city: 'Kiev',
        street: 'Zolotova',
    },
    'complex key': 'complex',
    ['key_'+21*2]: 'computed value',
    greet() {
        // console.log('Greet from person', this)
    },
    arrow: () => {
        // console.log('Person Arrow', this)
    },
    info() {
        // console.log(this)
        // console.log('Person name', this.name)
    }
}


// console.log( person)
// person.greet()
// person.arrow()
// person.info()

// console.log(person['adress'])
// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])


// person.age++
// console.log(person.age) 

// person.languages.push('de')
// console.log(person.languages) 

// person.address = undefined
// console.log(person.address)
// delete person.address
// console.log(person)

//Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const { age, name: firstName = 'Test', languages } = person
// console.log(languages, age, firstName)
// console.log([1,2])

// for (let key in  person ){
//     if(person.hasOwnProperty(key)){
//         console.log(person[key])
//     }
// }

// console.dir(Object)

// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// })

const logger = {
    keys(withText = true){
        if(withText){
            console.log('Object keys', Object.keys(this))
        } else {
            console.log(Object.keys(this))
        }
    },

    keysAndValues() {
        Object.keys(this).forEach((key )=> {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    },
}

// const bound = logger.keys.bind(person,)
// bound(false)

// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human {
    static isHuman = true 

    humanGreet(){
        console.log('greet from human')
        return 42
    }

    toString() {
        console.log('to string ')
    }
}
class Person extends Human{
 constructor(name, age) {
    super()
    this.name = name ?? 'Underfinded name'
    this.age = age ?? 'Underfinded age'
 }
 sayHello () {
    // console.log('Hello from ', this.name )
 }
}



const newPerson1 = new Person('Vladilen', 30)

const newPerson2 = new Person('Elena', 21)

newPerson1.sayHello()
newPerson2.sayHello()

// console.log(newPerson2.humanGreet())
// console.log(newPerson1.toString())

//console.log(Person.isHuman)
