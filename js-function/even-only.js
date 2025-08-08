function evenNumbersOnly (numbers) {

    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number)
        }
        
    }
    return evens;
}

const numbers = [2, 3, 45, 45, 6, 77, 45, 34, 44, 55];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are', evens)



function sumOfEvenNumbers (numbers){

    let sum = 0;
    for(const number of numbers){
         if(number % 2 === 0 ){
            console.log(number);
            sum += number;
        }
    }
       return sum ;

}

const sum = sumOfEvenNumbers(numbers)

console.log('sum of the even numbers is ', sum )
