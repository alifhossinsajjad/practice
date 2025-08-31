/**
 * chair ---> 3cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */

function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(2, 4, 1);
console.log(wood);

/**
 * shirt price --> 500;
 * pant price --> 300;
 * shoe price --> 900;
 */


function colothQuantity (shirtQuantity, pantQuantity, shoeQuantity){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;

    const shirtTotalPrice = shirtQuantity * perShirt;
    const pantTotalPrice = pantQuantity * perPant;
    const shoeTotalPrice = shoeQuantity * perShoe;



    return{
        shirtPrice : shirtTotalPrice,
        pantPrice : pantTotalPrice,
        shoePrice : shoeTotalPrice,
        totalPrice : shirtTotalPrice + pantTotalPrice + shoeTotalPrice
    };
}


const prices = colothQuantity (2, 4, 2);
console.log('shirt price:', prices.shirtPrice);
console.log('pant price:', prices.pantPrice);
console.log('shoe price:', prices.shoePrice)
console.log('total price:', prices.totalPrice);
