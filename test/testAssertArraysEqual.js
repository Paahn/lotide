const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(["a", "b", 3], ["a", "b", 3]); // expecting true
assertArraysEqual(["a", "b", "3"], ["a", "b", 3]); // expecting false

assertArraysEqual([45], [45, 67, 99]);           // expecting false, duh
assertArraysEqual([23, 34, 34], [23, 34, 34]);   // expecting true