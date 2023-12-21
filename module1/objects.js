// objects
// object literal {}

let person1 = {
  name: "Bronny",
  age: 18,
  favfood: "Pizza",
};

let person2 = {
  name: "Bryce",
  age: 16,
  favfood: "gummies",
};

let person3 = {
  name: "zhuri",
  age: 9,
  favfood: "spaghetti",
};
let user = {
    name: 'lebron',
    age: 39,
    location: 'LA',
    kids: [person1, person2, person3],
    login: () => {
        console.log('user login method')
    }, 
    getKidsName() {
        this.kids.forEach(element => {
            console.log(element.name)
        })
    }
}

console.log(user)
console.log(user.age)
console.log(user.name)

user.location = 'cleavland'
console.log(user.location)

console.log(user['age'])
console.log(user['name'])
user.login()
user.getKidsName()

// Math Object

console.log(Math.PI.toPrecision(3))

const area = 7.7
console.log(Math.round(area))
console.log(Math.floor(area))

console.log(Math.random * 100)