const applePrice = 350;
const appleGood = 250;
const appleBad = 150;

if (applePrice < 400 && appleGood <= 400) {
  console.log("give me 1kg of apples");
} else {
  console.log("Don not give me an apple.");
}


// more and more condition

// or consdition

const alexSalary = 30000;
const age = 21;
const taka = true;


if (alexSalary > 20000 || age > 20 || taka == true)
{
    console.log ('you are a perfeeact young boy');
}

else {
    console.log ('you are not a perfeact young boy');
}


// and condittion


const johnSalary = 30000;
const johnAge = 21;
const johnTaka = true;


if (johnSalary > 20000 && johnAge > 20 && johnTaka == true)
{
    console.log ('you are a perfeeact young boy');
}

else {
    console.log ('you are not a perfeact young boy');
}



/*---------------------COMPLEX CONMDITION------------- */

const salary = 30000;
const isBCS = true;
const hasCar = true;



if ((salary > 20000 && hasCar == true )  || isBCS== true){
    console.log ('we all agree')
}

if ((salary > 20000 || hasCar == true )  && isBCS== true){
    console.log ('we all agree')
}

