function numbers (number){
    if(number % 2 !== 0){
        return number *2;
    }
    else{
        return number / 2;
    }
    
}

console.log(numbers(5));
console.log(numbers(6));