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
console.log(c === 4); //Strict equality <Type + Value>

console.log(c !== 4); //Lose equality <Value> and if the
// type are not the same it converts the right value to
// the type of the left value and cpmpares the value

// Ternary / Conditional Operator
// The Condition: If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer
let points = 90;
let type = points > 100 ? "gold" : "silver";

console.log(type);

// Logical operators
// Logical AND (&&)
// Only true if both operands are true

let highIncome = true;
let goodCreditScore = true;

let isEligibleForLoan = highIncome && goodCreditScore;

console.log(isEligibleForLoan);

//logical OR (||)
// True if only one operand is true
let goodIncome = true;
let highCreditScore = false;

let isEligible = goodIncome || highCreditScore;

//NOT Operator (!)
let refusedLoan = !isEligible;

console.log(isEligible);

// Applying Truthy or Falsy to get Short-circuting effect
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// CONTROL FLOW
// If...else

// Hour
// If hour is between 6am and 12pm: Good morning
// If hour is between 12pm and 6pm: Good afternoon
// Otherwise: Good evening

let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good evening");

// Switch...case

let role;
switch (role) {
  case "administrator":
    console.log("Administrator");
    break;

  case "guest":
    console.log("Guest User");
    break;

  default:
    console.log("Unknown User");
}

// Achieving same result using if...else statement
if (role === "administrator") console.log("Administrator");
else if (role === "guest") console.log("Guest User");
else console.log("Unknown");

// LOOPS
//For loop
// for (initialExpression; Condition; increment) statement
for (i = 0; i < 5; i++) console.log("For loop", i);
for (i = 1; i <= 5; i++) console.log("The For loop", i);

// To get odd numbers
for (i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

//While Loop
let ii = 0;

while (ii <= 5) {
  if (ii % 2 !== 0) console.log(ii);
  ii++;
}

//do...while loop
let q = 0;

do {
  if (q % 2 !== 0) console.log(q);
  q++;
} while (q <= 10);

// AVOID Infinite loops
//not incrememting creates infinite loop which can crash your browser or your pc

// For...in loop
// To iterate over the properties of an object

let robot = {
  name: "tosin",
  use: "massager",
};

for (let key in robot) {
  console.log(key, robot[key]);
}

// For...of loop
// To iterate over the elements in an array

let fruits = ["apple", "lettuce", "water melon", "grape"];
for (let fruit of fruits) console.log(fruit);

// Use the break keyword to jump out of a loop

// OBJECTS
// To group related objects together and also have a function act on them

// let radius = 7;
// let x = 1;
// let y = 2;
// function draw() {}

// Object-oriented Programming (OOP)
const circle = {
  radius: 7,
  location: {
    x: 1,
    y: 2,
  },
  isActive: true,
  draw: function () {
    console.log("Draw a circle");
  },
};

circle.draw(); // Method

// Factory Function
//  this is used to create multiple objects
// This uses camel notation - oneTwoThreeFour

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw a circle");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Functions
// this function is also to create an object
// The Constructor function uses Pascal notation - OneTwoThreeFour
// Used mostly by developers familiar with Java and/or C#

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw");
    });
}

const circle3 = new Circle(3);
// Line 282 can also be written as:
Circle.call({}, 3); // This is using the call method to create circle 3

console.log(circle3);

// OBJECTS ARE DYNAMIC - You can add properties to them and delete properties from them
const school = {
  name: "Belmont",
};

// Adding properties
school.address = "PortHarcourt";
school.color = "Ash and white";
school.securityGuard = "Amadi";

// Deleting Properties
delete school.securityGuard;

console.log(school);

//////////////////////////////////////////////////////////////////

// USING FOR...OF LOOP TO ITERATE OVER THE PROPERTIES OF AN OBJECT

const church = {
  denomination: "Pentecostal",
  name: "TCN",
  draw: function () {
    console.log("My church");
  },
};

// For..in loop
for (let key in church) console.log(key, church[key]);

// For...of loop
// To get the keys
for (let key of Object.keys(church)) console.log(key);
// To get the values
for (let chu of Object.entries(church)) console.log(chu);

// To check if a given property exists in an object, use the in property
if ("Pentecostal" in church) console.log("Yes");

// CLONING AN OBJECT
// Cloning the churches object
// Old menthod of cloning
const church2 = {};
for (let key in church) church2[key] = church[key];
console.log(church2);

// New method of cloning using the  .assign method
const church3 = Object.assign({}, church);
console.log(church3);

// The Simplest way to clone an object - the spread operator (...)
const church4 = { ...church };
console.log(church4);
