
// how to find the lowest number;


const heights2 = [167, 190, 120, 165, 137];

function getMin (heights2){
    let min = heights2[0]
    for (const heigh of heights2){
        if (heigh > min){
            min = heigh;
        }
    }
    return min;
}

const lowest = getMin (heights2);
console.log(lowest);