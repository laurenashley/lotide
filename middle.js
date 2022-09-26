// TEST/ASSERTION FUNCTIONS
const eqArrays = (first, second) => {
  let counter = 0;
  let isEqual;
  if (first.length === second.length) {
    while (counter < first.length) {
      const isMatch = first[counter] === second[counter];
      isEqual = isMatch ? true : false;
      if (!isMatch) {
        break; // Stops loop when match fails
      }
      counter++;
    }
  } else {
    isEqual = false;
  }
  return isEqual;
};

const assertArraysEqual = (actual, expected) => {
  const isMatch = (actual === expected) || eqArray(actual, expected);
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;
  const message = isMatch ? successMsg : failMsg;
  console.log(message);
};

// ACTUAL FUNCTION
const middle = (array) => {
  let middleVals = [];

  // if array has only 1 or 2 elements return empty array
  if (array.length > 2) {
    // determine if length is even or odd
    const isEven = (array.length % 2 === 0);
    // even: divide array into 2 equal parts
    if (isEven) {
      // divide array into two equal parts
      // push tail of first array
      // push head of second array
    } else {
      // odd: divide by 2, use whole number as index for slice start, push the next item
    }
  } 
  console.log(middleVals);
};

// Test Code
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]