const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

// keep collecting from the input array until the callback provided returns a truthy value. 
const takeUntil = function(array, callback){
  let newArr = [];

  for (const item of array){
    if (callback(item)){
      return newArr;
    }
    newArr.push(item);
  }
  return newArr;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); 


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
module.exports = takeUntil;