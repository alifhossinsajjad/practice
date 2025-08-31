const products = [
    {name : 'shampoo', price : 300, quantity : 5},
    {name : 'Shop', price : 100, quantity : 2},
    {name : 'face-wash', price : 350, quantity : 1},
    {name : 'Body-lotion', price : 500, quantity : 3},
    {name : 'perfium', price : 250, quantity : 2},
]

function cartTotal (products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);