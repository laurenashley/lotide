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
      // TO DO if different data types
      // if length is only 1, convert value to array
      const newA = Object.values(actual);
      const newE = Object.values(expected);
      console.log('13 ', typeof newA, typeof newB);

      // Compare each value by it's index
      actual.forEach(e => {
        const expIndex = expected.indexOf(e);
        isMatch = (expected[expIndex] === e); // TO DO exit loop when false, will fix l.23
      });
    } else {
      isMatch = false;
    }
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

assertEqual(stringArray, ['hello', 'my', 'name', 'is']);
assertEqual(numArray, [5, 6, 9, 13]);
assertEqual(stringArray, ['my', 'name', 'is']);
assertEqual(stringArray, ['my', 'names', 'is']); // TO DO this fails
assertEqual(numArray, [6, 9, 13]);
assertEqual([], []);
assertEqual(tail([5]), [5]); // TO DO this fails
assertEqual(tail([5, 6]), 6); // TO DO this fails
assertEqual(tail(['is', 'blah']), 'blah'); // TO DO this fails