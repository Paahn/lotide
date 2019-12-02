const eqArrays = require('./eqArrays')

const assertArraysEqual = function(list1, list2){
  console.log(eqArrays(list1, list2));
   if (eqArrays(list1, list2)){
    console.log(`😀😀😀 ${list1} === ${list2}`);
   } else {
    console.log(`😟😟😟 ${list1} !== ${list2}`)
   }
}


module.exports = assertArraysEqual;