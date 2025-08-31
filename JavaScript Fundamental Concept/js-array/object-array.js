const employee = [
    {name:'Alif mia', roll: 206, designation:'senior developer', salary: 30000},
    {name:'Shofiq mia', roll: 206, designation:'content writer', salary: 29000},
    {name:'Ali mia', roll: 206, designation:'ui/ux', salary: 25000},
    {name:'Arman mia', roll: 206, designation:'junior ui/ux', salary: 20000},
]


// console.log(employee[2]);


for(const emp of employee){
    const person = emp;
    const personInfo = person.name + " : " + person.salary
    console.log(personInfo)
}