// problem-01

function totalFine( fare ) {
          // You have to write your code here

          if (typeof fare !== 'number' || fare <= 0){
            return "Invalid";
          }

          let surcharge = fare * 20 / 100;
          let total = fare + surcharge + 30;
          return total;
}
// problem-02 

function  onlyCharacter( str ) {
          // You have to write your code here
          if (typeof str !== 'string' || str <= 0){
            return "Invalid";
          }
         let noSpace = '';

         for (let i = 0 ; i < str.length; i++){
            if(str[i] !== " "){
                noSpace = noSpace + str[i];
            }
         }
         let result = noSpace.toUpperCase();
         return result;
}


// problem-03

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null){
            return "Invalid";
          }
    const team1 =  player1.foul + player1.cardY + player1.cardR ;

    const team2 =  player2.foul + player2.cardY + player2.cardR ;

    if( team1 < team2) {
        return player1.name;
    }
    else if ( team2 < team1){
        return player2.name;
    }
    else{
        return "Tie";
    }
}


// problem-04

function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          if(!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "invalid"
          }

          if(arr1.length !== arr2.length){
            return false;
          }

          for (let i = 0 ; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
          }

          return true;
}

// problem-05

function  resultReport( marks ) {
          // You have to write your code here

          if(!Array.isArray(marks)){
            return "Invalid"
          }

          let totalMark = 0;
          let totalSubjeatPass = 0;
          let totalSubjeatfail = 0;

          for (const mark of marks){
            totalMark = totalMark + mark;
            if(mark >= 40){
                totalSubjeatPass++
            }
            else {
                totalSubjeatfail++;
            }
          }

          const finalMark = Math.round(totalMark /marks.length);
          
          return {
            finalScore: finalMark,
            pass: totalSubjeatPass,
            fail: totalSubjeatfail,
          }

}