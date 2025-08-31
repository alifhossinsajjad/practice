const jack = 50 ;
const rose = 40;
const harry = 60;

if (jack > rose && jack > harry){
    console.log('jack is the ultimate boss')
}
else if (rose > jack && rose > harry){
    console.log('rose is the boss')
}
else {
    console.log('harry is the kardishians boss')
}


function maxOfThree (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3;
    }
}

const getMax = maxOfThree(88, 45, 67);
console.log(getMax);




const max = Math.max(12, 34, 45, 56, 67, 6, 67, 78, 89, 9, 89, 9,89)
console.log('max is using Math.max', max);