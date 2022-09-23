// Load full Lodash build
const _ = require('lodash');

// Implement Functions
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`;
  const failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;
  let isMatch = (actual === expected);

  // Check if inputs are arrays, compare values by their index
  if (Array.isArray(actual) && Array.isArray(expected)) {
    // TO DO [] should yield []
    // TO DO [1] should yield []
    actual.forEach(e => {
      console.log('10 ', actual.indexOf(e));
      const expIndex = expected.indexOf(e);
      isMatch = expected[expIndex] === e; // TO DO this needs to stop loop if false
      console.log('18 ', expected[expIndex], e, isMatch);
    });
  }

  const result = isMatch ? successMsg : failMsg;

  console.log(result);
};

const tail = function(array) {
  return _.tail(array);
};

// Test Code
const stringArray = tail(['hello', 'my', 'name', 'is']),
  numArray = tail([5, 6, 9, 13]);

assertEqual(stringArray, ['hello', 'my', 'name', 'is']);
assertEqual(numArray, [5, 6, 9, 13]);