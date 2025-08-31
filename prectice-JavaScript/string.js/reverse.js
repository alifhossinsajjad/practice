const sentence = 'i am good boy';

let reverse = ''
for (const latter of sentence){
    reverse = latter + reverse ;
}

console.log(reverse);