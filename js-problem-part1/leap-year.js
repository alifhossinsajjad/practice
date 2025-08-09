
// simple logic for leapyear




function isLeapYear (year){
    if (year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2043)
console.log(isLipi);



/*
1. those year that is not divisble by 100 , if the year is divisble by 4
then it will be a leap year
2. if the year is divisble by 400, then it is a leap year
3. else is is not a leap year
*/


  function isLeapYear3 (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0  && year % 400 === 0 ){
        return true;
    }
    else {

        return false;
    }
  }


  const isLeap = isLeapYear3(2100);
  console.log(isLeap);