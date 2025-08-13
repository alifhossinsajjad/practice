// how to avarage total products

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
]

function findAveragePhonePrice (phones){
    if(phones.length === 0 )
        return 0;

    let total = 0;
    for (let phone of phones){
        total += phone.price;
    }

    return total / phones.length;
}

const totalAvereg = findAveragePhonePrice(phones);
console.log(totalAvereg.toFixed(2))