// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Code
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // true