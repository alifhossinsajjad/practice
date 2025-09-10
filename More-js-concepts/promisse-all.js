const { get } = require("http");

const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num1 ", num);
  if (num > 5) {
    resolve({ num1: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num2 ", num);
  if (num > 5) {
    resolve({ num2: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num3 ", num);
  if (num > 5) {
    resolve({ num3: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData4 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num4 ", num);
  if (num > 5) {
    resolve({ num4: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData5 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num5 ", num);
  if (num > 5) {
    resolve({ num5: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData6 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num6 ", num);
  if (num > 5) {
    resolve({ num6: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData7 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num7 ", num);
  if (num > 5) {
    resolve({ num7: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});
const getData8 = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num8 ", num);
  if (num > 5) {
    resolve({ num8: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});

Promise.all([getData1,getData2,getData3,getData4,getData5,getData6,getData7,getData8])

.then(res => console.log(res))
.catch(erorr => console.log(erorr));