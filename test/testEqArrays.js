// const assertEqual = require('../assertEqual')
// const eqArrays = require('../eqArrays')

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true when arrays are identical", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3])));
  });

  it("should return false when the arrays are not identical", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1])));
  });
  
  it("should return false when the length of the arrays is different", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])));
  });
});