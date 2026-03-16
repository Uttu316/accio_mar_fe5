console.log("A");

async function getData() {
  console.log("B");
  let obj = { x: 0 }; // memory
  setTimeout(() => {
    obj.x++;
    console.log("C", obj.x);
  }, 3000);

  obj.x++;
  console.log("D", obj.x);
  return obj; // same memory refrence
}
getData()
  .then((v) => {
    v.x++;
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("E");
