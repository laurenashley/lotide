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

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else break;  // stop looping
  }
  return result;
};

// Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(data1, results1); // fail
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // pass
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // pass