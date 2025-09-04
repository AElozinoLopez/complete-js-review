console.log("Welcome back to this review!");

let name = "Elozino Lopez";
// console.log(name);

// Objects
// To group related data together

let person = {
  name: "Elozino Lopez",
  age: 30,
  city: "New York",
};

// Dot notation to update the value
person.name = "ASAIJE";

//Bracket notation to update the value
let selected = "name";
person[selected] = "ELopez";

console.log(person.name);

// Arrays
// To group related data together in a list

let selectedColors = ["red", "blue"];
console.log(selectedColors[1]);

// The length of an array is dynamic. so also is the objects.
selectedColors[2] = "purple";
selectedColors[1] = 27;

console.log(selectedColors.length);

//Technically an array is an object

// Functions
// a set of statements that performs a task or calculates a value

// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Amanda", "Obi");
// greet("Ike", "Christian");

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

// OPERATORS
// Arithmetic Operators: +, -, *, /, %, **, ++, --
// Assignment Operators: =, +=, -=, *=, /=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !

// Arithmetic Operators
let x = 10;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment
console.log(++x); //11
console.log(x++); //11
console.log(x); //12

// Decrement
console.log(--x); //11

//Assignment Operator
let z = 22;

z += 3;

console.log("z = " + z);
// -=, *=, /=

// Comparison Operator
let c = 4;

// Relational
console.log(c > 4);
console.log(c >= 4);
console.log(c < 4);
console.log(c <= 4);

//Equality
console.log(c === 4);
console.log(c !== 4);
