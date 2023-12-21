// functions declaration - hoisted

function greet(){
    console.log('hello there')
}

// function expression- non hoisted
const speak = function(){
    console.log('good day')
};

greet()
speak()


// Functions take parameters
function greetWithName(name){
    console.log(`Hello ${name}`)
}

greetWithName('jordan')

// default value
function defaultValue(time = 'night'){
    console.log(`Good ${time}`)
}

defaultValue('morning')
defaultValue()

// functions return values as well
const calcArea = function(radius){
    let area = 3.14 * radius ** 2
    return area
}

console.log(calcArea(3))

// Arrow/Rocket Function work similar to normal functions
// shorter to write, `this` is bound differently
const calcArea2 = (radius) => 3.14 * radius ** 2

console.log(calcArea2(3))

const greet2 = () => console.log('Hello world 2')
greet2()

const bill = (products, tax) => {
    let total = 0
    for ( let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total
}

console.log(bill([10, 15, 20], 0.4));

// callbacks

const myFunc = (callbackFunc) => {
    let value = 50
    callbackFunc(value)
}

// For each method (array method)
let people = ['mario', 'luigi', 'peach']

people.forEach((element, index) => {
    console.log(`${index}:`, element)
});

const logPerson = (person, index) => {
    console.log(`${index}:`, person);
}

people.forEach(logPerson)

let html = ``;
people.forEach((element) => {
    html += `<li style="color: purple">${element}</li>`
})
console.log(html)