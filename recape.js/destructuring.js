

/**
 * Array and object Destructuring
 */




const frineds = ["alif", "saiful","midul","arfan","lifan"]

const [frined1,frined2,frined3] = frineds;

// console.log(frined1)


/**
 * how to destructureing a object remember should that When destructuring an object, the value passed to it must be destructed using the same method.
 */



const person = {
    name : "dalim ali",
    age : 33,
    friends : ["alif", "saiful","midul","arfan","lifan"],
    country : "bangladesh"
}

const {name,age,friends, country} = person

console.log(friends[3]);