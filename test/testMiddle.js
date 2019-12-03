// const assertArraysEqual = require('../assertArraysEqual')
// const middle = require('../middle')

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2]), [1, 2]); // => [1, 2]

const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return the middle two items of an even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return the middle element of an odd length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it("should return the same array when the length is smaller or equal to 2", () => {
    assert.deepEqual(middle([1, 2]), [1, 2]);
  });
});