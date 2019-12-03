

const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

//return a new array with only those elements from source that are not present in the removeFromArray.

const without = function(inputArray, removeFromArray){

    // we need to find the indices where we want to splice the inputArray
    for (let i = 0; i < inputArray.length; i++){
      for (let j = 0; j < removeFromArray.length; j++){
        if (inputArray[i] === removeFromArray[j]){
          inputArray.splice(i, 1);
        }
      }
    }
  console.log(inputArray);
  return inputArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
module.exports = without;