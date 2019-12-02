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

module.exports = middle;



