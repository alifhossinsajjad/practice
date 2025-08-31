const institute = {
    name : 'GAI',
    department : ['CST', 'DESIGN', 'PRINTING'],
    event : ['job faier', '21 feb', 'pohela boishaq', 'Dec 16'],
    uniqe : {
        dep : 'cst',
    },
    result : {
        cgpa : 4.89,
        merit : 'top',
    }
}

institute.name ='DPI'


console.log(institute['uniqe']['dep']);
console.log(institute['result']['merit'])
console.log(institute['name'])

// delete property delete the value
delete institute.department[2];
console.log(institute);