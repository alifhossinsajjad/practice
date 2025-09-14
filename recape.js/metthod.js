/**
 * array of object 
 */
/**
 * How to create a new array from an array object with the value of a specific element 
 */

const products = [
    {name:"iPhone-11",brand:"apple",made:"california",price:80000,color:"black"},
    {name:"iPhone-12",brand:"apple",made:"chaina",price:90000,color:"taitenium"},
    {name:"iPhone-13",brand:"apple",made:"chaina",price:100000,color:"gold"},
    {name:"iPhone-14",brand:"apple",made:"japan",price:120000,color:"white"},
    {name:"iPhone-15",brand:"apple",made:"chaina",price:140000,color:"green"},
    {name:"iPhone-16",brand:"apple",made:"chaina",price:157000,color:"purple"}
]

 
const productColor = products.map(products => products.color)

// console.log(productColor);

/**
 * whene we need a specific value on the array or object then we Run filter operation
 */

const madeProduct = products.filter(products => {
    return products.made === "chaina";
})

// console.log(madeProduct);

/**
 * filter operation
 */

const ProductPrice = products.filter(products => {
    return products.price >= 110000
})

// console.log(ProductPrice);

/**
 * find operation
 */


const productfind = products.find(products => {
    return products.name === "iPhone-13"
})

console.log(productfind);