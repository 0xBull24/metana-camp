const doSomething = () => {
    // empty example arrow function
}

// example component from react
const myComponent = (props) => {
    return props// html
}

{/* Example of inline function for react 

<button onClick={() => {
    // do something in line
}}>push me</button> 

*/}

// Ternary operators allows for if not this then this statements (if else shorthand)
let age = 10
let name = age > 10 ? 'Pedro' : "Jack"
console.log(name)

// object destructure 
// if a value of a key is also a variable then the key does not need to have a value added
const Person = {
  name,
  age: 20,
  married: false,
};

const person2 = {...Person, name: 'Sarah'}
console.log(person2)

const names = ['mario', 'luigi']
const names2 = [...names, 'jacob']
console.log(names)
console.log(names2)

// Array methods .map, .filter, .reduce

// returns a value for each element in the array replacing the array with the new values
const newNames = names.map(element => {
    return element + '-bro'
})
console.log(newNames)

// evaluates a condition and returns the array with the array and new values

const noLuigi = names.filter(element => {
    return element !== 'luigi'
})
console.log(noLuigi)

// Export and import method for commonjs
module.exports = { doSomething, myComponent }
// const something = require('doSomething')

// Export and import methods for ES6
/* export function function1() {
    Allows function to be import elsewhere
    example import 
    import { function1 } from 'filename'
}

export default function function2() {
    only allowed 1 default function per file and does not need a name when imported
    example import
    import function2 from 'filename'
} */

// Optional chaining will throw undefined for nullish type errors instead of crashing a program
const data = {
    person: {
        name: "max"
    },
    track: "spa"
}

console.log('person', data.person?.name)
console.log('time without chaining', data.track.frog)