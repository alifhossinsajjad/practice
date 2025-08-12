// how to convert celcius to fehrenheit


function celToFehr (celcius){
    const fahrenheit = (celcius * 9 / 5 ) + 32;
    return fahrenheit;
    
}

const fahrenheit = celToFehr(50);
console.log(fahrenheit);