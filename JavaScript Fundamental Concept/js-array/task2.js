
// how to define the eveen numbers in a array


const numbers = [12, 98, 5, 41, 23, 78, 46];

const eveen = []

for (let i = 0 ; i <numbers.length ; i++){
    if (numbers [i] % 2 === 0 ){
        eveen.push(numbers[i]);
    }
}

console.log(eveen);