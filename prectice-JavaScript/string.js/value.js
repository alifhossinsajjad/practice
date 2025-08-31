const person = {
    name : 'Alif mia',
    age : 21,
    profession : 'Developer',
    salary : 30000,
    married : 'unmarried',
    'fav palce' : ['sajek', 'bandorban', 'cox bazar']
}



// 3 way of value changes

// 1st way of dot notation
person.salary = 40000,

// second way of braket notation
// most of the case we use this method 
person['age'] = 22,
person['fav palce'] = ['thailand', 'England', 'scotland']

// thard way of key value 
// we will use this mmost of the rare case
const propName = 'profession';
person[propName] = 'devops';
console.log(person);