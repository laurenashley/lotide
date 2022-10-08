const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // pass
assertArraysEqual(middle([1, 2, 3, 4]), [3]); // fail