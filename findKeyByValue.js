// Code Implementation
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const findKeyByValue = (obj, val) => {
  return Object.keys(obj).find(key => obj[key] === val);
};

// Test Code
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);