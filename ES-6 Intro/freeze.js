/**
 * i can't do enything in the objeact i can do only read this object (freeze) <------- object method
 */


const employee ={
    name :"alif",
    designation : "Senior Software Developer",
    salary : "80000",
    exprience : 5
}

Object.freeze(employee)
delete employee.exprience;

employee.age = 25;
employee.location = 'Dhaka'

employee.salary = parseInt(employee.salary) + 10000;
console.log(employee)