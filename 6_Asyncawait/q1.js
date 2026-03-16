console.log("A");

async function getData() {
  console.log("B");
  let x = 0;
  setTimeout(() => {
    x++;
    console.log("C", x);
  }, 3000);

  x++;
  console.log("D", x);
  return x;
}
getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("E");
