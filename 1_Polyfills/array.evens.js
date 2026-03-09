//create a function that will return a new array of even numbers from any array of integers

let array = [2, 3, 4, 5, 62, 72, 1, 8, 5];

function evens() {
  let arr = this;

  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      output.push(arr[i]);
    }
  }
  return output;
}

if (!Array.prototype.evens) {
  Array.prototype.evens = evens;
}

const res = array.evens();

console.log(res);
