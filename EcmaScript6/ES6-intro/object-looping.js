const { Md3P } = require("react-icons/md");

const employee ={
    name :"alif",
    designation : "Senior Software Developer",
    salary : "80000",
    exprience : 5
}


for (const key in employee){
    const value = employee[key];
    console.log(key,value);
}


const keys = Object.keys(employee);
console.log(keys);
for (const key of keys){
    const value = employee[key]
}