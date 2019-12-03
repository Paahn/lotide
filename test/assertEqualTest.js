const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns false for Lighthouse Labs === Bootcamp", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });

  it("returns true for 1 === 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });

  it("return true for hello Kitty === hello Kitty", () => {
    assert.strictEqual(assertEqual("hello Kitty", "hello Kitty"))
  });
  
  it("return false for 32 === 337", () => {
    assert.strictEqual(assertEqual(32, 337));
  });

});

// old tests
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello Kitty", "hello Kitty");
// assertEqual(32, 337);
