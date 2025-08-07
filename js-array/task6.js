// how to declare a object 

const studentMarks = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for (const mark of studentMarks){
    const person = mark;
    const personInfo = person.name + ' : ' + person.marks
    console.log(personInfo)
}