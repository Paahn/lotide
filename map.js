const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


const words = ["one,","take", "defcon", "us"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["o", "t", "d", "u"]);

const lunch = ["mpifteki", "vodino", "antrikio"];
assertArraysEqual(map(lunch, winner => winner + "+Ketchup"), ["mpifteki+Ketchup", "vodino+Ketchup", "antrikio+Ketchup"]);

const suka = ["pizza"];
assertArraysEqual(map(suka, sukasuka => sukasuka.repeat(3)), ["pizzapizzapizza"] );

module.exports = map;
