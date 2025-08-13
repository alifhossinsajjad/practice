// how to find the smallest name usding for loop ;

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function friends (heights2) {
    let min = heights2[0]
    for (const heigh of heights2){
        if (heigh > min){
            min = heigh;
        }
    }
    return min;
}


const smallestName = friends (heights2);
console.log(smallestName);