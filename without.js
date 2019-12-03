

const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

// assertArraysEqual(["a", "b", 3], ["a", "b", 3]);
// assertArraysEqual(["a", "b", "3"], ["a", "b", 3]);

// assertArraysEqual([45], [45, 67, 99]);
// assertArraysEqual([23, 34, 34], [23, 34, 34]);

const without = function(inputArray, removeFromArray){
  // let outputArray = [];
  // console.log(` input is ${inputArray.length} < ${removeFromArray.length}.`);
  // if (inputArray.length < removeFromArray.length){
    // we need to find the indices where we want to splice the inputArray
    for (let i = 0; i < inputArray.length; i++){
      for (let j = 0; j < removeFromArray.length; j++){
        if (inputArray[i] === removeFromArray[j]){
          inputArray.splice(i, 1);
        }
      }
    }
  // } else {
  //   console.log("You're trying to remove more elements that the source array has!");
  // }
  console.log(inputArray);
  return inputArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
module.exports = without;