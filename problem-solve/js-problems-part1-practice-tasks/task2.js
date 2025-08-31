
const number = [5, 6, 11, 12, 98, 5];
function countNumber (numbers , target) {
    let count = 0;
    for (let i = 0; i <number.length; i++){
        if(numbers[i] === target){
            count++;
        }
    }
    return count;
}


console.log(countNumber(number, 5));
console.log(countNumber(number, 25));




const grosarry = ['apple', 'bananan', 'apple', 'painaple', 'painaple', 'watermilon', 'watermilon']

function growsarryItem (grosarry, target){
    let count = 0;
    for(let i = 0; i < grosarry.length; i++){
        if(grosarry[i] === target){
            count++;
        }
    }
    return count;
}

console.log(growsarryItem(grosarry,'apple'));
console.log(growsarryItem(grosarry,'watermilon'))