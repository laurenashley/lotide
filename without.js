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
  let result = array;

  console.log('New Test');
  itemsToRemove.forEach(eToRemove => {
    const itemIndex = result.findIndex(eFromResult => eFromResult === eToRemove);
    // console.log('36 ', result.indexOf(eToRemove));
    // const itemIndex = result.indexOf(eToRemove);
    console.log('38 ', itemIndex, result.splice(itemIndex, 1));
    // result = result.splice(itemIndex, 1);
  });
  // console.log(result);
};

// Test Code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3", "4"], ["1", "2", "3"]); // => ["3"]

// assertArraysEqual();