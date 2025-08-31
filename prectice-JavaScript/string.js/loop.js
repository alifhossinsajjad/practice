const mobile = {
    brand : 'Apple',
    price : '1000$',
    modle : '16 pro max',
    color : 'titenium',
    camera : '16 mp',
    screen : 'oled',
    isNew : true,
}


// for of : array
//  for in : object

for (const prop in mobile){
    console.log(mobile)
    console.log(mobile[prop])
}


const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key, ":", mobile[key]);
}