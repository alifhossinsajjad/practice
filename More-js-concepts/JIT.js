function add (a,b) {
    return a + b ;
}

for (let i = 0 ; i > 100000; i++){
    add(23, 455)
}



// 🔹 Real-World Example (String Concatenation)

function concatStrings(a, b) {
  return a + b;
}

// Called many times with strings
for (let i = 0; i < 1000000; i++) {
  concatStrings("Hello", "World");
}