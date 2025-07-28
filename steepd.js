/**
 * MULTI_LEVEL CONDITION
 */


const price = 7000;

if (price >= 2000){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if (proice > 3000) {
    // 3%discount
    const discount = price * 3/ 100;
    const payAmmount = price - discount;
    console.log(price)
}
else {
    console.log(price);
}