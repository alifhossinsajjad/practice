/**
 * i can do update the object value but i can't add or delete object value in the (seal) <------- object method
 */

const employee ={
    name :"alif",
    designation : "Senior Software Developer",
    salary : "80000",
    exprience : 5
}

Object.seal(employee)
delete employee.exprience;

employee.age = 25;
employee.location = 'Dhaka'

employee.salary = parseInt(employee.salary) + 10000;
console.log(employee)