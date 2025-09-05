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
// Write a function that takes two numbers and returns the maximum of the two numbers

// Solution 1 <clumsy though>
// function max(a, b) {
//   if (a > b) console.log("The maximum number is " + a);
//   else if (a === b) console.log("The numbers are the same");
//   else console.log("The maximum number is " + b);
// }
// max(7, 12);

// Soluiton 2
// function max(a, b) {
//   if (a > b) return a;
//   // else if (a === b) console.log("The numbers are the same");
//   else return b;
// }
// let number = max(7, 12);
// console.log(number);

// // Soluiton 3
// function max(a, b) {
//   if (a > b) return a;
//   // else if (a === b) console.log("The numbers are the same");
//   return b;
// }
// let number = max(7, 12);
// console.log(number);

// Soluiton 4 and the best. using ternary operator
function max(a, b) {
  return a > b ? a : b;
  // else if (a === b) console.log("The numbers are the same");
}
let number = max(7, 12);
console.log(number);

// Exercise 3
// Write a function that takes two parameters, width and height and returns true if
// the image islandscape and false if portrait

function isLandscape(width, height) {
  // return (width > height) ? true : false;
  return width > height;
}

console.log("Picture is landscape: " + isLandscape(1200, 7800));

// Exercise 4

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => fizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";
  // else if (input % 3 !== 0 && input % 5 !== 0)
  return input;
}

console.log(fizzBuzz(7));
