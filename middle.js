const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

//  middle returns an array containing the middle element of the input array

const middle = function(array) {
  let parity = "";
  returnArray = [];
  // console.log("the length of the array is: ", array.length);
  if (array.length <= 2){
    return array;
  } else if (array.length % 2 === 0){
    parity = "even";
    // figure out what the middle is
    returnArray = [array[(array.length/2)-1], array[array.length/2]];
    // console.log("the element is: ", array[array.length/2]);
  } else {
    parity = "odd";
    // figure out what the middle is
    returnArray = [array[Math.floor(array.length/2)]];
  }
  // console.log(returnArray);
  return returnArray; 
}
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2]), [1, 2]); // => [3]



