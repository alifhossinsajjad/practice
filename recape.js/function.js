/**
 * Templete String
 * `` <---------- it's call a templete string 
 */


const user = ("alif mia")

const name = `Hello! ${user}`

// console.log(name);


/**
 * Arrow Function
 */

const sum = (a,b,c) => {
    const add = a+b+c;
    return add;
}

const result = sum(1,6,3,)
// console.log(result);


/**
 * spreed operator 
 */


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// console.log(...numbers);


/**
 * IF we need a new array then we will do that 
 */


const number = [1,11,12,22,13,23,45,56,43,55,66,77,88];
const newNumber = [...number,33,44,17,18];
console.log(...newNumber);
/**
 * if we coopy a array then we use the spred oparetor 
 */