const age = 20;
const busTicket = 800;

if (age <= 10){
    console.log('Bus Ticket Free')
}
else if (age >= 50 ) {
    // 50% discount
    const discount = busTicket * 50 / 800;
    const payAmmount = busTicket - discount;
    console.log(payAmmount);
}
else {
    console.log('800 tk')
}