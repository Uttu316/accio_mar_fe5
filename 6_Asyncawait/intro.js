const getData = async () => {
  // return "Bye" //resolve
  throw "hello"; //reject
};

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
