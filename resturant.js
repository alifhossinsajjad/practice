const age = 51;
const price = 1000;

if (age <=12) {
    console.log("you can get it free")
}
else if (age >= 60 ){
    // 50% Discount
    const discount = price * 50 / 1000;
    const payAmmount = price - discount;
    console.log(payAmmount)
}
else if (age >= 50){
    // 20% Discount
    const discount = price * 20 / 1000;
    const payAmmount = price - discount;
    console.log(payAmmount)
}
else {
    console.log('you will pay that')
}