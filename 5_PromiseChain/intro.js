const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
});

p.then((v) => {
  console.log(v);
  return v + " A";
})
  .then((v) => {
    console.log(v);
    throw v + " B"; // reject
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
