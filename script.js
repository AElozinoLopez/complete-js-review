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

console.log(selectedColors);

//Technically an array is an object
