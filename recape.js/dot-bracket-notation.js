/**
 *  dot vs bracket notation
 */


const personData = {
    name : "verly",
    passion : "Developer",
    salary : 70000,
    friends : ["locky","tony struk","wich","spark","pitter"],
    family : {
        father : "Jose batler",
        countery : "englind",
        age: 22
    }
}

// it's called dot notation
const userName = personData.family.father 
// console.log(userName);

// it's called bracket notation

const userData = personData["salary"];
console.log(userData);


// somehow you difine a key in the object property with a number then you can't use dot notation , then you must be used bracket notation 