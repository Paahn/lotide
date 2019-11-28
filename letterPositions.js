const eqArrays = function (array1, array2) {
  let assertment = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i] && typeof array1[i] === typeof array2[i]) {
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

const assertArraysEqual = function (list1, list2) {
  console.log(eqArrays(list1, list2));
  if (eqArrays(list1, list2)) {
    console.log(`😀😀😀 ${list1} === ${list2}`);
  } else {
    console.log(`😟😟😟 ${list1} !== ${list2}`)
  }
}

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (const item of sentence) {
    // if (item === " ") {
    //   continue;
    // }
    if (results[item]) {
      results[item].push(index);
    } else {
      results[item] = [index];
    }
    index++;
  }
  delete results[' '];
  return results;
}

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").e, [1]);

