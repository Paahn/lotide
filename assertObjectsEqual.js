const eqObjects = function(obj1, obj2){
  let condition = false;
  if (Object.keys(obj1).length === Object.keys(obj2).length){
    for ( const key of Object.keys(obj1) ){
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
        return eqArrays(obj1[key], obj2[key]);
      }
      if (Object.keys(obj1) === Object.keys(obj2)){
        condition = true;
      }
    }
  } return condition;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)){
    console.log(`😀😀😀 ${inspect(actual)} === ${inspect(expected)}`);
   } else {
    console.log(`😟😟😟 ${inspect(actual)} !== ${inspect(expected)}`)
   }
};

assertObjectsEqual({1: "peos", 2: "to Peos"}, {1: "peos", 2: "to Peos"});
assertObjectsEqual({}, {});
