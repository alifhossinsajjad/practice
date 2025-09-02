const numbers = [2,34,56,67,4,6,7,]
console.log(numbers)
console.log(...numbers
)


const frist = [1,2,3,4,5,6,7,8]
const second = [...frist];
second.unshift(0);
console.log(frist);
console.log(second);