const eqObjects = function (obj1, obj2) {
  let condition = false;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (const key1 in obj1) {
      for (const key2 in obj2) {
        if (key1 === key2) {
          if (typeof obj1[key1] === "object" || typeof obj2[key1] === "object") {
            if (obj1[key1].length === obj2[key1].length) {
              for (const value1 of obj1[key1]) {
                for (const value2 of obj2[key2]) {
                  if (value1 === value2) {
                    condition = true;
                  } else {
                    condition = false;
                  }
                }
              }
            } else {
              condition = false;
            }
          } else {  //when equal to primitive type
            if (obj1[key1] === obj2[key1]) {
              condition = true;
            }
          
          }
        }
      }
    }
  } return condition;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)){
    console.log(` ${inspect(actual)} === ${inspect(expected)}`);
   } else {
    console.log(` ${inspect(actual)} !== ${inspect(expected)}`)
   }
};

assertObjectsEqual({1: "peos", 2: "to Peos"}, {1: "peos", 2: "to Peos"});
assertObjectsEqual({3: "ruby"}, {});
assertObjectsEqual({ band: "Gorgoroth", album: "Twilight of the Idols"}, { band: "Backstreet Boys"});
