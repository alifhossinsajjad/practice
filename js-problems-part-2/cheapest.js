const mobiles = [
    {name : 'Samsung', price : 20000, camera : '12mp', color : 'black' },
    {name : 'I-phone', price : 120000, camera : '12mp', color : 'black' },
    {name : 'Oppo', price : 33000, camera : '12mp', color : 'black' },
    {name : 'Xaomi', price : 26000, camera : '12mp', color : 'black' },
    {name : 'Pixel', price : 28000, camera : '12mp', color : 'black' },
    {name : 'Asus', price : 25000, camera : '12mp', color : 'black' },
    {name : 'Redmi', price : 23000, camera : '12mp', color : 'black' },
    {name : 'Huwai', price : 35000, camera : '12mp', color : 'black' }
]


function getCheapestMobiles (mobiles){
    let min = mobiles[0];
    for(const mobile of mobiles){
        if(mobile.price < min.price){
            min = mobiles
        }
    }
    return min;
}

const cheap = getCheapestMobiles(mobiles);
console.log('the cheapest mobiles :', cheap);