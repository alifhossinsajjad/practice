const { ImCalculator } = require("react-icons/im");

function inchToFeet (inch){
    const feet = inch / 12 ;
    return feet ;
}

const height = inchToFeet(75);
console.log(height);


// 2nd way 
function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetnumber = parseInt (feetFraction);
    const inchRemaining = inch % 12;
    const result = feetnumber +  ' ft '  + inchRemaining + ' inch '
    return result;
}


const romjanHeight = inchToFeet2 (75);

console.log(romjanHeight);


// mile to kilometer 

function mileToKilometer (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilometer(100));



// kilo meter to mill 

function kiloMeterToMiles (kilo){
    const mile = kilo * 0.621371;
    return mile;
}

console.log(kiloMeterToMiles(140));