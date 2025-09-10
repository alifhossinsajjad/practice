
// Example: 1 simple Variable

let user = {
    name: "alif"
}

// user is reachable here 
console.log(user);

// now remove reference
user = null;

// The object {name: "alif "} has no reference 
// Garbage collector will cleam it automically


// Example 2 : objects and Reference

function creatUser() {
    let person = { 
        name: "Jack"
    };
    return person ; 
}

let user1 = creatUser ();
let user2 = creatUser();

console.log(user1);
console.log(user2);

user1 = null ;

// Exmaple 3 : Circular references (GC still works!)

function demo (){
    let obj1 = {};
    let obj2 = {};


    obj1.friend = obj2;
    obj2.friend = obj1;

    return true ;
}


demo();



// ⚡ Quick Example in Real Use:

let timer = setInterval(() => {
    console.log("Runing.....")
},1000)


setTimeout(() => {
    clearInterval (timer);
    timer = null;
    console.log("timer cleard , memory freed");
}, 5000);




