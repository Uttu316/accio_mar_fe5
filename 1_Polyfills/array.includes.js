const array = ["A", "B", "C", "D"];

if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (input) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() === input.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
}

const isPresent = array.includes("c"); //inbuilt
const isPresent2 = array.myIncludes("C"); //customised

console.log(isPresent, isPresent2);
