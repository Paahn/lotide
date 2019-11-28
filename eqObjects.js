const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    console.log(`😟😟😟 ${actual} !== ${expected}`);
  }
}
const eqArrays = function(array1, array2){
  let assertment = true;
  if (array1.length === array2.length){
    for (let i = 0; i < array1.length; i++){
      if (array1[i] === array2[i] && typeof array1[i] === typeof array2[i]){
        assertment = true;
      } else if (array1[i] !== array2[i]) {
        assertment = false;
      };
    }
  }
  return assertment;
}

// function eqObjects which will 
// take in two objects and returns true or false, based on a perfect match.

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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(ab, ba);
// assertEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc), "expected to be true."); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2), "expected to be false."); // => false
