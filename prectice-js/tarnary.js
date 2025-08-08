/**
 * TERNARY --> three parts
 * 
 * ?       :
 * 
 * condition ? do something when true  : do something when false
 */


const age = 8;


// simple ternary

// age >= 18 ? console.log('you are abaileable for national voat') : console.log('you are not abailable for voat')


let price = 500;
const isLeader = false;

if (isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}

// console.log(price)

price = isLeader === true ? 0 : price + 100 ;