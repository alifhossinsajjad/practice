const today = new Date ();
const date = new Date ('2026-10-23')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2090, 0 , 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));


