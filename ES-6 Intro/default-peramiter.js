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