function totalFine( fare ) {
          // You have to write your code here

          if (typeof fare !== 'number' || fare <= 0){
            return "Invalid";
          }

          let surcharge = fare * 20 / 100;
          let total = fare + surcharge + 30;
          return total;
}

console.log(totalFine(200))


