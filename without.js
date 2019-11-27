

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

assertArraysEqual(["a", "b", 3], ["a", "b", 3]);
assertArraysEqual(["a", "b", "3"], ["a", "b", 3]);

assertArraysEqual([45], [45, 67, 99]);
assertArraysEqual([23, 34, 34], [23, 34, 34]);

const without = function(inputArray, removeArray){
  outputArray = [];
  index1 = null;
  index2 = null;
  console.log(` input is ${inputArray.length} < ${removeArray.length}.`);
  if (inputArray.length < removeArray.length){
    // we need to find the indices where we want to splice the inputArray
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] === removeArray[i]){
          index1 = i;
          index2 = i + 1;
        }
    }
    outputArray = inputArray.splice(index1, index2);
  } else {
    console.log("You're trying to remove more elements that the source array has!");
  }
  return outputArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
