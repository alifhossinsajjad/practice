// const heights = [32, 34, 564, 67, 78, 90, 343, 56, 78, 33, 55, 76, 88, 56]

// function getMax (numbers){
//     let max = numbers[0];
//     for (const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// const max = getMax (heights);
// console.log('max of number is:', max);



const minPrivelist = [23, 34, 45, 1, 3, 34, 23, 11, 33,33, 44, 45, 65, 77, 2, 343, 54]

function getMin (numbers){
    let min = numbers [0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(minPrivelist);
console.log('min number of :',min)