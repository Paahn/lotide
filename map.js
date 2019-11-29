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
  } else {
    return false;
  }
  return assertment;
}

const assertArraysEqual = function(list1, list2){
  console.log(eqArrays(list1, list2));
   if (eqArrays(list1, list2)){
    console.log(`😀😀😀 ${list1} === ${list2}`);
   } else {
    console.log(`😟😟😟 ${list1} !== ${list2}`)
   }
}


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
