function count_zero (binaryString){
    let count = 0;
    for (let char of binaryString){
        if (char === '0'){
            count++;
        }
    }
    return count;
}

console.log(count_zero('0101010'));
console.log(count_zero('11001100'));
console.log(count_zero('0001100'));