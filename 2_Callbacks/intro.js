function getUserData(username, onSuccess, onFailure) {
  console.log("C");
  if (username === "ABC") {
    onSuccess({
      id: "323212",
      name: "Abc Xyz",
    });
  } else {
    onFailure("Oops");
  }
  console.log("D");
}

console.log("A");
getUserData(
  "ABC",
  (data) => {
    console.log("User", data);
  },
  (err) => {
    console.log(err);
  },
);
console.log("B");
