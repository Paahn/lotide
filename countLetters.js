// What are you doing here assertEqual function???????????
// const assertEqual = function(actual, expected){
//   if (actual === expected){
//     console.log(`😀😀😀 ${actual} === ${expected}`);
//   } else {
//     console.log(`😟😟😟 ${actual} !== ${expected}`);
//   }
// }

// this function counts how many occurences of the same letter in a string
const countLetters = function (inputString) {
  const results = {};

  for (const item of inputString) {
    if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
  }
  return results;
}
module.exports = countLetters;
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("zavarakatranemia"));







