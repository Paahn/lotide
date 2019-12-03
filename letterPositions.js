const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (const item of sentence) {
    // if (item === " ") {
    //   continue;
    // }
    if (results[item]) {
      results[item].push(index);
    } else {
      results[item] = [index];
    }
    index++;
  }
  delete results[' '];
  return results;
}

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;