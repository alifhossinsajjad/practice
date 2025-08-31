function oddAverage (numbers){
    const odd = []; 
    for (const number of numbers ){
        if( number % 2 === 1){
            console.log(number)
            odd.push(number)
        }
     }
     console.log(odd);
    let sum = 0;
    for ( const number of numbers){
        sum += number;
    }
    const count = odd.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [22, 43, 55, 56, 77, 88];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is :', avg.toFixed(2));