const numbers = [1, 2, 3, 4, 5, 6]

// const mew_numbers = Array.from(number);

const new_numbers = [].concat(numbers)

new_numbers.push(22);
console.log(numbers)
console.log(new_numbers)