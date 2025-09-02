/**
 * i can do everythind in this method i can change, update and delete this objeact value in this method  (freeze) <------- object method
 */



const employee ={
    name :"alif",
    designation : "Senior Software Developer",
    salary : "80000",
    exprience : 5
}

const values = Object.keys(employee);
const employeeValue = Object.values(employee);
const employeeEntrie = Object.entries(employee);
console.log(values)
console.log(employeeValue);
console.log(employeeEntrie)