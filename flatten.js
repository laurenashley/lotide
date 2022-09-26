// Function Implementation
const assertArraysEqual = (actual, expected) => {
  const isMatch = (actual === expected) || eqArray(actual, expected);
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const message = isMatch ? successMsg : failMsg;

  console.log(message);
};

const eqArray = (first, second) => {
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

const flatten = (array) => {
  let flattened = [];

  array.forEach(e => {
    const isArray = Array.isArray(e);

    if (isArray) {
      e.forEach(i => {
        flattened.push(i);
      });
    } else {
      flattened.push(e);
    }
  });
  console.log(flattened);
};

// Test Code
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]