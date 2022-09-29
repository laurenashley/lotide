// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const isMatch = (actual === expected) || eqObjects(actual, expected);
  const successMsg = `👍✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;
  
  const result = isMatch ? successMsg : failMsg;
  
  return result;
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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let isMatch = false;

  if (keys1.length === keys2.length) {
    // compare values by key of first object
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];

      // if key has an array value
      if (Array.isArray(val1)) {
        isMatch = eqArrays(val1, val2);
      } else {
        isMatch = val1 === val2;
        // console.log(assertEqual(val1, val2));
      }
      // when false stop looping
      if (!isMatch) {
        break;
      }
    }
  }

  return isMatch;
};

// Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false