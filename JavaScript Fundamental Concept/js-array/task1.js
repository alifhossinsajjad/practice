// how to reverse a array

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reversed = []

for (let i = 0 ; i < colors.length; i++){
    reversed.unshift(colors[i])
}

console.log(reversed)