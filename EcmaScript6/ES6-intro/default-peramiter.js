/**
 * some thumb rule of deafult value . may be useful 
 * 
 * 
 * add --> 0 
 * multiply ---> 1
 * subtraction --->0
 * string ---> " "
 * 
 * array ---> []
 * 
 * object --> {}
 */

const { Console } = require("console");

// 1 Addtion 

function add (a = 0, b = 0){
    return a+b;
}


// console.log(add());
// console.log(add(5));
// console.log(add(5,7))


// Substraction

function number (a = 0, b = 0 ){
    return a-b ;
}

// console.log(number());
// console.log(number(10));
// console.log(number(243,34))



// Miultiplication


function multiply (a = 1, b = 1){
    return a*b
}

// console.log(multiply());
// console.log(multiply(304));
// console.log(multiply(34,54));



// string 

function greet (name = "gust"){
    return `hello , ${name}!`;
}

// console.log(greet());
// console.log(greet("alif"))


// Array

function showArray ( arr = []){
    return arr.join(", ");
}

// console.log(showArray());
// console.log(showArray([1,2,3,4,5]))


// Object 


function printUser (user = {name : "Unknown", age : 0 }){
    return `Name : ${user.name}, Age : ${user.age}`;

}

console.log(printUser());
console.log(printUser({name:"alif", age:59}));




//add

function add (a = 0, b = 0){
    return a + b ;
}

console.log(add());
console.log(add(7));
console.log(add(6,7));


// substraction

function subtraction (a = 0 , b = 0){
    return a-b ;
}

console.log(subtraction());
console.log(subtraction(4));
console.log(subtraction(34,76));


// multipliction 

function multipliction (a = 1, b = 1){
    return a*b
}

console.log(multipliction());
console.log(multipliction(45));
console.log(multipliction(35,57));

// string

function greet (name = 'Guest'){
    return  `hello, ${name}`
}
console.log(greet());
console.log(greet('alif'));

// array

function showArray (arr = []){
    return arr.join(", ");
}
console.log(showArray());
console.log(showArray([2,3,4,5]))


// object 
function printUser (user = {name: "unknown", age:0}){
    return `Name:${user.name}, Age:${user.age} `
}

console.log(printUser())
console.log(printUser({name:"alif", age:22}))