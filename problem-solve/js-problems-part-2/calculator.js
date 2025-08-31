function add (num1, num2){
    const sum = num1 + num2;
    return sum;
}

function substract (num1, num2){
    return num1 - num2;
}

function muliply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}


function calculator (a, b, operation) {
    if (operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if (operation === 'substract'){
        const result = substract(a, b);
        return result;
    }
    else if ( operation === 'multiply'){
        const result = muliply (a, b);
        return result;
    }
    else if (operation === 'divide'){
        const result = divide (a, b);
        return result;
    }
    else{
        return 'Oparetion are not Allowed'
    }
}


const result = calculator (29, 34, 'add');
console.log(result);