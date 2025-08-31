function add (price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(20, 160);
console.log(bill);


// how to call return more easily

function add2 (prcie1, price2){
    return prcie1 + price2;
}

const bill2 = add2(222, 230)
console.log(bill2 );



function doMath ( num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply /2
    return result; 
}

const result = doMath (20, 40);
console.log(result);
