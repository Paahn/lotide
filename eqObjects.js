const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    console.log(`😟😟😟 ${actual} !== ${expected}`);
  }
};
const eqArrays = function (array1, array2) {
  let assertment = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i] && typeof array1[i] === typeof array2[i]) {
        assertment = true;
      } else if (array1[i] !== array2[i]) {
        assertment = false;
      }
    }
  }
  return assertment;
};

// function eqObjects which will
// take in two objects and returns true or false, based on a perfect match.

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(`${ab} = ${ba} expected to be true: ${eqObjects(ab, ba)}`);
console.log(`${ab} = ${abc} expected to be false: ${eqObjects(ab, abc)}`);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(`${cd} = ${dc} expected to be true: ${eqObjects(cd, dc)}`); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(`${cd} = ${cd2} expected to be false: ${eqObjects(cd, cd2)}`); // => false
