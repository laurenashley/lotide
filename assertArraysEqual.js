// Function Implementation
const assertArraysEqual = (actual, expected) => {
  const isMatch = (actual === expected) || eqArray(actual, expected);
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = isMatch ? successMsg : failMsg;

  console.log(result);
};

const eqArray = (first, second) => {
  let counter = 0;
  let result;
  if (first.length === second.length) {
    while (counter < first.length) {
      const isMatch = first[counter] === second[counter];

      result = isMatch ? true : false;

      if (!isMatch) {
        break; // Stops loop when match fails
      }
      counter++;
    }
  } else {
    result = false;
  }

  return result;
};

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // pass
assertArraysEqual(['1', '2', '3'], ['3', '2', '1']); // fail
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // fail
