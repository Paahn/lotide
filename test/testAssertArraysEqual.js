// const assertArraysEqual = require('../assertArraysEqual')

// assertArraysEqual(["a", "b", 3], ["a", "b", 3]); // expecting true
// assertArraysEqual(["a", "b", "3"], ["a", "b", 3]); // expecting false

// assertArraysEqual([45], [45, 67, 99]);           // expecting false, duh
// assertArraysEqual([23, 34, 34], [23, 34, 34]);   // expecting true

const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const assertArraysEqual = require('../assertArraysEqual')

describe("#assertArraysEqual", () => {
  it("should return true when arrays are identical", () => {
    assert.strictEqual(assertArraysEqual(["a", "b", 3], ["a", "b", 3]));
  });

  it("should return false when even a single type of an item in an array is different", () => {
    assert.strictEqual(assertArraysEqual(["a", "b", "3"], ["a", "b", 3]));
  });
  
  it("should return false when the length of the arrays is different", () => {
    assert.strictEqual(assertArraysEqual([45], [45, 67, 99]));
  });
});