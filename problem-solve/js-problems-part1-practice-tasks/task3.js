
function countNumber (str){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
const sentence = 'education is wealth'
console.log(countNumber(sentence));