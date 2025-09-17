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

// EXERCISE ON OBJECTS
// Exercise 1
// Create an address object that takes three properties - street, city, and zipcode.
// Then create a function called showAddress(address) to display all the properties
// of this object along with their values

let address = {
  street: "2 exercise street",
  city: "Lagos",
  zipcode: 123456,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// Exercise 2
// Initialize the address object using a factory function and a constructor function

// Using Factory Function
function showAddress(address, city, zipcode) {
  return {
    address,
    city,
    zipcode,
  };
}

let addressFactory = showAddress("3 exercise street", "Ikota", 654321);
console.log(addressFactory);

// Using Factory Function
function ShowAddress(street, address, zipCode) {
  (this.street = "street"), (this.city = "city"), (this.zipcode = zipCode);
}

let addressConstructor = new ShowAddress("4 exercise street", "Isolo", 987654);
console.log(addressConstructor);

// Exercise 3
// Create 2 functions to check if address1 nd address 2 areEqual and if they areSame

let address1 = new ShowAddress("a", "b", "c");
let address2 = new ShowAddress("a", "b", "c");

// Are equal, that is, if the values are equal
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

console.log(areEqual(address1, address2));

// Are Same, that is, point to same location in memory.
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2));

//  Create a blog post with the following properties
// titile
// author
// views
// comment
//    (author, body)
// isLive

const blog = {
  title: "How to Learn Code The Easy Way",
  author: "Elozino Lopez",
  views: 10000000,
  comment: [
    {
      author: "Chinwe Elozino",
      body: "This is indeed a smart way not just to code but to do everything else",
    },
  ],
  isLive: true,
};

for (content in blog) console.log(content, blog[content]);

// Exercise 4
// Create a constructor function called post for a blog yet to be published
function Post(title, body, author) {
  (this.title = "title"),
    (this.body = "body"),
    (this.author = "author"),
    (this.views = 0),
    (this.comment = []),
    (this.isLive = false);
}

const blogPost = new Post("a", "b", "c");
console.log(blogPost);

/////////////////////////////////////////////////////////
// ARRAY EXERCISES

// Exercise 1
// Write a function that takes two parameters (min, max) and
// returns all the numbers in the array from the minimum to the maximum

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i); //transfers the result of i to output
  return output;
}

const numbersArrEx = arrayFromRange(1, 4);

console.log(numbersArrEx);

// Note: if the max number passed is less than the min numbet we get an empty array as the result

//  Exercise 2
// Create a function that behaves like the includes method. It should return true if the
// searchElement is in the array otherwise it should return false.

// Solution
const numbersEx2 = [1, 2, 3, 4, 5];

function includes(array, searchElement) {
  for (let number of array) if (number === searchElement) return true;
  return false;
}

console.log(includes(numbersEx2, 1));
console.log(includes(numbersEx2, -1));

// Exercise 3
// Write a function that excludes chosen elements as specified in the second parameter from an array

const numbersEx3 = [1, 2, 3, 4];

const result = except(numbersEx3, [1]);

console.log(result);

function except(array, excluded) {
  const result = [];
  for (let element of array)
    if (!excluded.includes(element))
      // Checks if the excluded array is not in the element iterated
      result.push(element);
  return result;
}

////////////////////////////////////////////////////////////////////////////

// Exercise 4
// Write a function that takes three parameters - array, index, and offset,
// which offsets an element at a specified index according to the value specified in the offset

// Solution

const numbersEx4 = [1, 2, 3, 4];

const output = move(numbersEx4, 0, -3); // the move() method is used to move an element in an array

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset. ");
    return;
  }

  const output = [...array]; // Pass copy of the numbersEx4 array to output
  const element = output.splice(index, 1)[0]; // Removes 1 element at the specified index and returns an array with the first returned element starting at [0] index.
  output.splice(position, 0, element); // To put the removed element back in the output array
  return output;
}

// Exercise 5
// Create a function called countOccurrences that takes an array and
// a searchElement and returns the number of times that searchElement has occurred in the array.

const numbersEx5 = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
  // Solution 1
  // let count = 0;
  // for (let element of array) if (element === searchElement) count++;
  // return count;

  // Solution 2
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

const count = countOccurrences(numbersEx5, 1);

console.log(count);
