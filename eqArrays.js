// Function Implementation
const assertEqual = (actual, expected) => {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const eqArrays = (first, second) => {
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
  // console.log(result);
};

// Test Code
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // true
