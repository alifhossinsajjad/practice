const products = [
    {id : 1, name : 'xiami phone', price : 20000},
    {id : 2, name : 'asus vibobook laptop', price : 200000},
    {id : 3, name : 'iphone', price : 150000},
    {id : 4, name : 'oppo reno 6 phone', price : 35000},
    {id : 5, name : 'macbook air 4 pro laptop', price : 250000},
    {id : 6, name : 'lenevo thinkpad laptop', price : 120000},
    {id : 7, name : 'nothing 1 phone', price : 50000},
    {id : 8, name : 'huwai p30 lite phone', price : 89000},
    {id : 9, name : 'samsung s20 ultra phone', price : 140000},
    {id : 10, name : 'samsung s21 ultra phone', price : 150000},
    {id : 11, name : 'samsung s22 ultra phone', price : 160000},
    {id : 12, name : 'samsung s23 ultra phone', price : 170000},
    {id : 13, name : 'samsung s24 ultra phone', price : 180000},
    {id : 14, name : 'samsung s25 ultra phone', price : 210000},
]


function matchedProducts (proucts, search){
    const matched = [];
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);