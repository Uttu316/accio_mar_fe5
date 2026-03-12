const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (2 > 4) {
      resolve("Great"); //success
    } else {
      reject("Bad"); // failure
    }
  }, 5500);
});

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
