const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(array) {
  let flattened = [];
  for (let i in array) {
    if (Array.isArray(array[i])) {
      for (let j in array[i]) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  } return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
module.exports = flatten;