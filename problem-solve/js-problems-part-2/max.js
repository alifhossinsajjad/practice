const disha = 65;
const salman = 86;

if ( disha > salman ){
    console.log('she will get the strobarry');
}
else{
    console.log('you will not get strobarry')
}


// inside a function 


function getMax (num1, num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(29, 49);
console.log('max of tow is:', max)