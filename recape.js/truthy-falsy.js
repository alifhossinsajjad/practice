/**
 * 
 * (advanced) truthy, false Ternary operator, shortcut and or
 * 
 * 
 * 
 * 
 * 
 * check the truthy or falsy value in simple way
 */


const test = ''

if(test){
    console.log("it is truthy");
}
else{
    console.log("it is a falsy");
}


/**
 * check the truthy or falsy value in ternary operator
 */


const myName = ""

myName ? console.log("it is a truthy") : console.log("it is a falsy")


/**
 * when we use the multiple condition then how to use the ternary operator
 */


const num = 10;

const result = ( num >= 10 && num<20 || num >15) ?("true"): ("false");

console.log(result);





const isActive = true;

const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user");

isActive ? showUser() : hideUser ();

isActive && showUser ();

isActive || hideUser();



/**
 * how to check type of 
 * it's call type couersion
 */


let numbers = "40"
const result23 =  numbers - 5
console.log( result23);