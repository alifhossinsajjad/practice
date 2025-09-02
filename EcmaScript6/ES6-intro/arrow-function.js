//  arrow funciton 

const { constrainedMemory } = require("process");

const add = (number1 , number2) => number1+ number2;

console.log(add(23,34));

// Easy 
// No paramiters

const sayHello = () => "Hello World"
console.log(sayHello())

// with paramiter
const square = a => a*a;
console.log(square(200));

// multiple paramiter

const additon = (a,b) => a + b;
console.log(additon(34,678));

// with default paramiters
const goodStudent = (name = "Good Student") => `Hello, ${name}`;

console.log(goodStudent("Alif Mia"))