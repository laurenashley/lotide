// Implement Functions
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`;
  const failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;
  const isEmpty = (actual.length === 0 && expected.length === 0);
  const sameLengths = actual.length === expected.length;
  let isMatch = (actual === expected);

  // Check if inputs are arrays
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (sameLengths) {
      // Compare each value by it's index
      actual.every(e => {
        const expIndex = expected.indexOf(e);
        isMatch = (expected[expIndex] === e);
        if (!isMatch) {
          return false; // Exit loop
        }
        return true;
      });
    } else {
      isMatch = false;
    }
  }
// TO DO comparing diff dataypes
  console.log('26 ', typeof actual, typeof expected,);
  if (actual.length === 1 || expected.length === 1) {
    console.log('28 ', actual[0], expected[0]);
    isMatch = (actual[0] === expected[0]);
  }

  const result = isMatch || isEmpty ? successMsg : failMsg;

  console.log(result);
};

const tail = function(array) {
  const result = array.length > 1 ? array.slice(1) : array[0];
  return result;
};

// Test Code
const stringArray = tail(['hello', 'my', 'name', 'is']),
  numArray = tail([5, 6, 9, 13]);

assertEqual(stringArray, ['hello', 'my', 'name', 'is']); // should fail
assertEqual(numArray, [5, 6, 9, 13]); // should fail
assertEqual(stringArray, ['my', 'name', 'is']);
assertEqual(stringArray, ['my', 'names', 'is']); // should fail
assertEqual(numArray, [6, 9, 13]);
assertEqual([], []);
assertEqual(tail([5]), [5]); // TO DO this fails
assertEqual(tail([5, 6]), 6); // TO DO this fails
assertEqual(tail(['is', 'blah']), 'blah'); // TO DO this fails