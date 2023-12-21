// loops
// for

for (let i = 0; i < 5; i++) {
    console.log('in loop:', i)
}
console.log('loop finished')

const names = ['amanda', 'barbie', 'nicki']
for (let i = 0; i < names.length; i++) {
    console.log('their name is', names[i])
}

for (const name of names) {
    console.log('their name is:', name);
}

let i = 0
while ( i < 5) {
    console.log('in the while loop:', i);
    i++;
}

i = 0
while (i < names.length) {
    console.log('while loop name is:', names[i])
    i++
}

do {
    console.log('value of i', i)
    console.log('do while loop', names[0])
} while (i < names.length)

// if flows

if (names.length > 5) {
    console.log('too many in your party')
} else if (names.length == 3) {
    console.log('your table is ready')
} else {
    console.log('you made a reservation?')
}

// logical operators `||` and `&&`
if (2 > 3 || 3 > 2) {
    console.log('one side of this is true')
}

if (2 > 3 && 3 > 2) {
    console.log('one of these is not true')
} else {
    console.log('sorry both are not true')
}

// break and continue
// break leaves the entire loop
// continue breaks skips current loop iteration

let scores = [50, 20, 30, 10, 0, 100, 70]

for (let i = 0; i < scores.length; i++) {
    console.log('your score: ', scores[i])

    if (scores[i] === 0) {
        console.log('still playing')
        continue
    }

    if (scores[i] === 100) {
        console.log('You reached the high score')
        break;
    }
}

// switch statements
// default block will be thrown if no values match
const GRADE = 'C'
switch (GRADE) {
  case "A":
    console.log("You are the best student");
    break;
  case "B":
    console.log("You are a good student");
    break;
  case "C":
    console.log("You are can work harder");
    break;
  default:
    console.log('not a valid grade')
    break;
}

// scope
// global scope
let money = 100

if(true){
    // local scope
    let money = 20
    console.log('amount of money', money)
}
console.log('amount of global money', money)