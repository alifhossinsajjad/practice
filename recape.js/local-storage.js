/**
 * Explore Local storage and session storage with JSON
 */



const handleAddToStorage = () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    // localStorage.setItem("name",name)
    // localStorage.setItem(email,name)

    // if we want to set the value or data by object in the local storage the we can should the follow in the instructions in blow
    
    const data = {
        name,
        email
    }

    localStorage.setItem(name,JSON.stringify(data))

    const storedItem = localStorage.getItem(name,email)
    console.log(JSON.parse(storedItem));
}


const handleClear = () => {
    localStorage.clear()
}
