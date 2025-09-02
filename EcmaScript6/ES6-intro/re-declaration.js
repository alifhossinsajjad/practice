/**
 * you can re-decalaration same scoped in the var but we can't should not use the var  
 */


var x = 10 ;
var x = 10;


let y = 5;
// let y = 5 it's worng way in the ES6 you can not be re-declara in the same scope

//ass like same to const 


 const arr = [1,2,3,4]

 arr.push(5,6,7,8,9);

//  arr = [10,11,12,13,14,15,16]  you can push the value but ypu can not edit another value in the const & let 
 console.log(arr)