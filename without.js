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

const without = (array, itemsToRemove) => {
  let result = [];

  // Check each item of array against itemsToRemove
  array.forEach(e => {
    const foundInRemove = itemsToRemove.find(element => element === e);
    if (!foundInRemove) {
      result.push(e);
    }
  });

  console.log(result);
};

// Test Code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3", "4"], ["1", "2", "3"]); // => ["4"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);