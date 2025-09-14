const friends = ["alif","lifan", "saiful", "midul"]

// friends.push("arfan")
// friends.pop();
// friends.unshift("rasibul")
// friends.shift()
// console.log(friends[2]) if i want to the index number then apply this method ;
// console.log(friends.slice(2,3)); if i wnat to slice the array then apply this method 
// console.log(friends.splice(2,3)) if you apply this method then you see that the index number or array splice start index number 2 and end inedx number 2 


// how to declare a for loop 

for (let i = 0 ; i <friends.length; i ++){
    const friend = friends[i];
    // console.log(friend);
}



// let number = 0;


// for (let number = 0 ; number < 100; number++){
//     const numbers = 10 * number;
//     console.log(numbers)
// }


function sum (a,b) {
    const result = a + b ;
    return result;
}

const output = sum(2,3)

// console.log(output)

const person = {
    name : "alif",
    age : 22,
    friends : friends,
    
}

console.log(person.friends[3]);