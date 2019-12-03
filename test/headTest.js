// const assertEqual = require('../assertEqual');
// const head = require('../head');

// keeping for reference the code where we used our own files for testing
// 
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["I'm the only element in this array"]), "I'm the only element in this array");
// assertEqual(head([89, 90, 3]), 45);

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

});
