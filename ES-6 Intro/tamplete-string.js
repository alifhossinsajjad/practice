// Dynamic string it's diclare to backtic ( ` )<----



function sum ( num1, num2){
    const result = num1+num2
    const output = `sum of ${num1} and ${num2} is equale to ${result}`
    
    console.log(output);
}

sum(23,34)



const price = 5000;
const discountPrice = `Discount price of ${price} afte 40% discoutn ${price * 0.4}`

console.log(discountPrice);