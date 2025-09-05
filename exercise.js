// Exercise 1
// Write a program to swap the value of two variables, a and b. that is, a = blue

let a = "red";
let b = "blue";

let c = a;

a = b;
b = c;

console.log(a);
console.log(b);

// Exercise 2
// Write a function that takes two numbers and returns the maximum of the two

function max(a, b) {
  if (a > b) console.log("The maximum number is " + a);
  else if (a === b) console.log("The numbers are the same");
  else console.log("The maximum number is " + b);
}
max(7, 12);
