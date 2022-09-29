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

const map = (array, cb) => {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

// Test Code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(words, results1)); // fail
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])); // pass
