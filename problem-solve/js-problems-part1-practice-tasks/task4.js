// find the lomgest word with a for loop 


function findLongestWord (str){
    const words = str.split(' ');
    let largestWord = '';

    for (const word of words){
        if(word.length > largestWord.length){
            largestWord = word;
        }
    }
    return largestWord;
}


const word = findLongestWord('I am learning Programming to become a programmer');
console.log(word);




// how to find the latgest word with sort method


function findLogestChar (str){
    const word = str.split(' ');
    const sortedWords = word.sort((a, b) => b.length - a.length);
    return sortedWords[0];
}

const longestWord = findLogestChar('I am learning Programming to become a programmer');
console.log(longestWord);