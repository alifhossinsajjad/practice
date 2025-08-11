const products = [
    {name : 'shampoo', price : 300},
    {name : 'Shop', price : 100},
    {name : 'face-wash', price : 350},
    {name : 'Body-lotion', price : 500},
    {name : 'perfium', price : 250},
]

function getShoppingTotal (products){
    let total = 0;
    for (const product of products){
        total = total + product.price;
    }
    return total;
}


const total = getShoppingTotal (products)
console.log(total);