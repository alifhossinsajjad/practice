const numbers = [1, 2 , 3, 4 ,5 ,6 , 7, 8];

const reversed = [];

for (let i = 0 ; i < numbers.length; i++){
    console.log(numbers[i])
    reversed.unshift(numbers[i])
}

console.log(reversed)