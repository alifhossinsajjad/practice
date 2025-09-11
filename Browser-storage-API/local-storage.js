

const addNumbersTols = () => {
     const number = Math.ceil(Math.random() *40)
     console.log(number);
     localStorage.setItem('number', number);
     
}

const setObjectToLS = () => {
    const customer = {
        name: 'Jack',
        product : 'adiddas shose',
        quantity : 4,
        price: 3500
    }
    const customerJson = JSON.stringify(customer);
    localStorage.setItem('customer', customerJson)
}


const readObjectFromLS = () => {
    const customerJSON = localStorage.getItem(customerJSON);
    const customer  = JSON.parse(customerJSON)
    console.log(customer.product)
;}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from local storage', number);
}