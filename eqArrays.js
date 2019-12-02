const assertEqual = require('./assertEqual')

// eqArrays checks if two arrays are identical

const eqArrays = function(array1, array2){
  let assertment = true;
  // guard condition ie if the arrays dont have the same length, they're not equal
  if (array1.length === array2.length){
    for (let i = 0; i < array1.length; i++){
      if (array1[i] === array2[i] && typeof array1[i] === typeof array2[i]){
        assertment = true;
      } else if (array1[i] !== array2[i]) {
        assertment = false;
      };
    }
  } else {
    assertment = false;
  }
  return assertment;
}

module.exports = eqArrays;
