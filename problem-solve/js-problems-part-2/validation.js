

function multiply (num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a valid number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply (4, 5)
console.log(result); 





function fullNmae (first , last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return 'Please prive a string'
    }
    const full = first + ' ' + last;
    return full
}

const full = fullNmae('alif ', 'mia');
console.log(full);


function getPrice (product){
    if(typeof product !== 'object'){
        return 'please provide a objeact'
    }
    const price = product.price;
    return price;
}

const price = getPrice({name : 'samsung', price : 30000, color : 'black'});
console.log(price);


function getSecond (numbers){
    if( Array.isArray (numbers) === false){
        return 'plase provide a valid array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([12, 34, 45]);
console.log(second);