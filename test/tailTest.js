// const assertEqual = require('../assertEqual')
// const tail = require('../tail')

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello Kitty", "hello Kitty");
// assertEqual(32, 337);
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail')
const assertEqual = require('../assertEqual')

describe("#tail", () => {
  it("returns the array without the head(the first element)", () => {
    assert.strictEqual(assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]));
  });
  it("returns an empty array when my array has one element", () => {
    assert.strictEqual(assertEqual(tail([1]), []));
  });
});
