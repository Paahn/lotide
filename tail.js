const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    console.log(`😟😟😟 ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i !== 0) {
      newArray = array[i];
    }
  }
  return newArray;
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello Kitty", "hello Kitty");
assertEqual(32, 337);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

