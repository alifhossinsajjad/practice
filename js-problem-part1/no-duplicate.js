const arrayName = ['Alif', 'lifan', 'Miful', 'Alif', 'Saiful', 'Miful', 'Arfan', 'Lifan', 'Arfan', 'Saiful']

const numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 6, 8, 7, 8, 7, 9, 11, 9, 12, 11, 12, 23, 12, 23]


function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if (unique.includes(item) === flase){
            unique.push(item);
        }

    }
    return unique;
}


const uniqearray = noDuplicate(arrayName);
console.log(uniqearray);