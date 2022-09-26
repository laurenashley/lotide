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
  const isMatch = (actual === expected) || eqArrays(actual, expected);
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
    const half = Math.floor(array.length / 2);
    

    if (isEven) {
      // even: divide array into 2 equal parts
      const firstHalf = array.slice(0, half);
      const secondHalf = array.slice(half);
      
      // push tail of first array and head of second array to result
      middleVals.push(firstHalf[firstHalf.length - 1], secondHalf[0]);
    } else {
      // odd: divide by 2, use whole number as index for slice start
      middleVals = array[half];
    }
  }
  // console.log(middleVals);
  return middleVals;
};

// Test Code
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // pass
assertArraysEqual(middle([1, 2, 3, 4]), [3]); // fail