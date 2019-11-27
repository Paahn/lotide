const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    console.log(`😟😟😟 ${actual} !== ${expected}`);
  }
}



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount){
  const results = {};
  // we need to count how many times a key which is provided by itemsToCount,
  // appears in the allItems
  for (const key of allItems){
    // check in itemsToCount if the key is there
    // for (const otherKey in itemsToCount){ // if (itemsToCount[key]){...}
      if (itemsToCount[key]){
        if (results[key]) {
          results[key] += 1;
        } else {
          results[key] = 1;
        }
      }
    // }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
