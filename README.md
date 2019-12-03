# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @paahn/lotide`

**Require it:**

`const _ = require('@paahn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: determines if two arrays are identical
* `assertEqual(actual, expected)`: determines if two items are identical
* `assertObjectsEqual(actual, expected)`: determines if two objects are identical
* `countLetters(inputString)`: counts how many occurences of the same letter in a string
* `countOnly(allItems,itemsToCount)`: counts how many occurences of a name in an object
* `eqArrays(array1, array2)`: checks if two arrays are identical 
* `eqObjects(obj1, obj2)`: takes in two objects and returns true or false, based on a perfect match 
* `findKey(obj, callback)`: takes an object and a callback function, calls the function to report the first occurence of a key. 
* `findKeyByValue(obj, value)`: takes in an object and a value,scans the object and returns the first key which contains the given value. 
* `flatten(array)`: takes in an array, if the array has other arrays in it, it removes the nested arrays
* `head(array)`: returns the first element (aka head) of an array
* `letterPositions(sentence)`: takes in a sentence and returns all the indices where each letter is found in the sentence
* `map(item, callback)`: takes an item and a callback function and runs the callback on the item
* `middle(array)`: returns an array containing the middle element of the input array
* `tail(array)`: returns the array without the first element of the input array
* `takeUntil(array, callback)`: keep collecting from the input array until the callback provided returns a truthy value.
* `without(inputArr, itemsToRemove)`: Return a new array with only those elements from source that are not present in the removeFromArray.

