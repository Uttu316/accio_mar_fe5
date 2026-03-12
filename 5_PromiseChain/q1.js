console.log("A");
const getData = (username) => {
  return new Promise((resolve, reject) => {
    console.log("B");
    setTimeout(() => {
      if (username) {
        resolve("ABC");
      } else {
        reject("OOps"); //async
      }
      console.log("C");
    }, 3000);
  });
};
console.log("D");

getData("XYz")
  .then((value) => {
    console.log(value);
    return value + 2;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("E");
