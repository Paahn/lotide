

const eqArrays = function(array1, array2){
  let assertment = true;
  if (array1.length === array2.length){
    for (let i = 0; i < array1.length; i++){
      if (array1[i] === array2[i] && typeof array1[i] === typeof array2[i]){
        assertment = true;
      } else if (array1[i] !== array2[i]) {
        assertment = false;
      };
    }
  } else {
    return false;
  }
  return assertment;
}

const assertArraysEqual = function(list1, list2){
  console.log(eqArrays(list1, list2));
   if (eqArrays(list1, list2)){
    console.log(`😀😀😀 ${list1} === ${list2}`);
   } else {
    console.log(`😟😟😟 ${list1} !== ${list2}`)
   }
}

//  middle returns an array containing the middle element of the input array

const middle = function(array) {
  let parity = "";
  returnArray = [];
  // console.log("the length of the array is: ", array.length);
  if (array.length <= 2){
    return returnArray;
  } else if (array.length % 2 === 0){
    parity = "even";
    // figure out what the middle is
    returnArray = [array[(array.length/2)-1], array[array.length/2]];
    // console.log("the element is: ", array[array.length/2]);
  } else if (array.length % 3 === 0){
    parity = "odd";
    // figure out what the middle is
    returnArray = [array[Math.floor(array.length/2)]];
  }
  // console.log(returnArray);
  return returnArray; 
}
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]); // => [3]


