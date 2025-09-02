/**
 * var ---> function -scoped (works inside the function where it's declared).
 * 
 * let & const ---> Block---scoped(works only inside {} where they are declared)
 *
 */
//It is works in the ES6


if(true){
    var a = 20;
    let b = 34;
    const c = 43;
    console.log(b);
    console.log(c);
}

console.log(a);
