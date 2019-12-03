const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)){
    console.log(` ${inspect(actual)} === ${inspect(expected)}`);
   } else {
    console.log(` ${inspect(actual)} !== ${inspect(expected)}`)
   }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({1: "peos", 2: "to Peos"}, {1: "peos", 2: "to Peos"});
assertObjectsEqual({3: "ruby"}, {});
assertObjectsEqual({ band: "Gorgoroth", album: "Twilight of the Idols"}, { band: "Backstreet Boys"});
