console.log("This is a log statement");

// Comments are done with 2 forward slashes. Nothing after the slash will be read for that line

// variables
let age = 34;
let year = 2023;

console.log(age, year);

// variables cannot start with `$` or have a space
// variables can hold any type

//  Datatypes
//  number - 1,2.4, etc
//  string - 'hello world', "hello", `hello`
//  boolean - true, false
//  null - variable with no value
//  undefined - variable not defined(did you mean?)
//  object - complex data type
//  symbol - used with objects

// Strings
let firstName = "lebron";
let lastName = "james";
let fullName = `${firstName} ${lastName}`;
let nickname = `${firstName[0]}${lastName[0]}`;
console.log(fullName);
console.log(fullName.toUpperCase());
console.log(nickname);
console.log(nickname.length);
console.log(fullName.lastIndexOf("a"));
console.log(fullName.slice(0, 2));
console.log(fullName.substring(3, 12));
console.log(nickname.replace("l", "B"));

// numbers
// math ops +, -, *, /, ** , %
// NaN (not a numnber) is type of number - derived from operations that lead to not a number
const PI = 3.14;
let r = 2;
let areaOFCircle = PI * r ** 2;
let likes = 10;
console.log(likes + 1);
console.log((likes += likes));
console.log(likes++);
console.log(--likes);
let err = likes / "hello";
console.log(err);

// arrays used to store data collections - typically of same type
let fighters = ["ken", "ryu", "akuma"];
console.log(fighters);
console.log(fighters[1]);
console.log(fighters[fighters.length - 1]);
console.log(fighters.join(","));
console.log(fighters.indexOf("ken"));
console.log(fighters.concat(["guile", "blanka"]));
console.log(fighters.push("ehonda"));

// booleans
console.log(true, false, "true", "false");
let newAge = 25;
console.log(newAge == 25);
console.log(newAge === "25");
console.log(newAge == 24);
console.log(newAge > 22);
