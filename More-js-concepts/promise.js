
const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 20;
  console.log("Genarated num ", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ erros: "Data is not available" });
  }
});

getData.then((data) => console.log(data))
.catch((error) => console.log(error));
