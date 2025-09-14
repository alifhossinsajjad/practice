/**
 * JSON, Fetch, keys, values, array add or remove using dots
 */

/**
 * how to convert a object to JSON data
 */

const person = {
  name: "dalim ali",
  age: 33,
  friends: ["alif", "saiful", "midul", "arfan", "lifan"],
  country: "bangladesh",

  family: {
    fathername: "jony dev",
    mothername: "rose",
  },
};

const jsonData = JSON.stringify(person);
// console.log(jsonData);

/**
 * how to convert jsondata to object
 */

const planeData = JSON.parse(jsonData);
// console.log(planeData);

//how to fetch api data call

fetch("url")
  .then((res) => res.json())
  .then((data) => {
    //    return console.log(data);
  })
  .catch((error) => {
    // console.log(error);
  });

/**
 * How to get the keys of an object
 */

const person3 = {
  name: "dalim ali",
  age: 33,
  friends: ["alif", "saiful", "midul", "arfan", "lifan"],
  country: "bangladesh",

  family: {
    fathername: "jony dev",
    mothername: "rose",
  },
};

const keys = Object.keys(person3);
// console.log(keys);

const keyValues = Object.values(person3);
// console.log(keyValues);

//how to crate a new array and then added in the frist array and console it

const products = [
  {
    name: "iPhone-11",
    brand: "apple",
    made: "california",
    price: 80000,
    color: "black",
  },
  {
    name: "iPhone-12",
    brand: "apple",
    made: "chaina",
    price: 90000,
    color: "taitenium",
  },
  {
    name: "iPhone-13",
    brand: "apple",
    made: "chaina",
    price: 100000,
    color: "gold",
  },
  {
    name: "iPhone-14",
    brand: "apple",
    made: "japan",
    price: 120000,
    color: "white",
  },
  {
    name: "iPhone-15",
    brand: "apple",
    made: "chaina",
    price: 140000,
    color: "green",
  },
  {
    name: "iPhone-16",
    brand: "apple",
    made: "chaina",
    price: 157000,
    color: "purple",
  },
  {
    name: "walton-x5",
    brand: "Walton",
    price: 14000,
    color: "silver",
  },
  {
    name: "walton-x3",
    brand: "Walton",
    price: 15000,
    color: "silver",
  },
];

const newData = [
  {
    name: "walton-x6",
    brand: "Walton",
    price: 16000,
    color: "silver",
  },
];

const newArray = [...products, newData];
// console.log(newArray);

// How to console an area by removing some arrays from an array and adding the rest

const remainingData = products.filter((p) => p.brand !== "apple");

console.log(remainingData);


const newArray2 = [...remainingData,newData];
console.log(newArray2);