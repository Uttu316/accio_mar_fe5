let array = ["A", "B", "C", "D", "E"];

function myMap(callback) {
  let output = [];

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let value = callback(arr[i], i, arr);
    output.push(value);
  }

  return output;
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = myMap;
}

const newArray = array.map((item, index, sameArray) => {
  return item + index;
});
const newArray2 = array.myMap((item, index, sameArray) => {
  return item + index;
});

console.log(newArray, newArray2);
