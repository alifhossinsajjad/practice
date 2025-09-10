const animal = {
    eat : true,
    wlak(){
        console.log("Animasl Walks")
    }
};

const rabbit = {
    jumps : true
};

rabbit.proto= animal;

console.log(rabbit.eat)
rabbit.walk;
console.log(rabbit.jumps)



// 🔹 Example 2: Function Constructors and Prototypes


function person (name){
    this.name = name;
}

person.prototype.sayHallo = function (){
    console.log(`Hello , my name is ${this.name}`);
}

const user1 = new person("Jack")
const user2 = new person("Eamy")

user1.sayHallo();
user2.sayHallo();


// 🔹 Example 3: Prototype Chain

const object = {

    age : 43,
    name : "julya cash",
    age : 34,
    name : "Abigale Morsi"
};
console.log(object.toString());