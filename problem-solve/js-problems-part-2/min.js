const prices = [12000, 20000, 34000, 45000, 56000, 150000, 120000, 8000, 250000, 6999]

function getMin (numbers){
    let min = numbers [0]
    for (const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}


const cheap = getMin (prices)
console.log("cheapest one is :",cheap)