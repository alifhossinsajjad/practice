const numbers = [2, 4, 1, 5, 8, 3, 20]

console.log(numbers);
numbers.sort();
console.log(numbers)



const ages = [1,3,5,6,9,7,12,23,45,67,89,90,34,32,31,45,54,]


// ascending
const sorted_ages = ages.sort(function(a, b){return a- b})
console.log(sorted_ages);

// desceding
const sorted_ages_desc = ages.sort(function(a, b){return b - a})

console.log(sorted_ages_desc)