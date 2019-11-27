const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    console.log(`😟😟😟 ${actual} !== ${expected}`);
  }
}
// const countObj = { counter: 0 }

const countLetters = function(inputString, checkString){
  let counter = 0;
  for (const letter of inputString){
    for (const otherLetter of checkString){
      if (letter === otherLetter){
        counter += 1;
      }
    }
  }
  return counter;
}
assertEqual(countLetters("alice in navy", "a"), 2);
assertEqual(countLetters("alice in navy", "alvy"), 5);
assertEqual(countLetters("Super Van Vacation vortex k?", "vuk"), 3);
assertEqual(countLetters("aaa", "asd"), 3);
assertEqual(countLetters("Super Van Vacation vortex k?", "b"), 0);


