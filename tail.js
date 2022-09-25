// Function Implementation
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const tail = function(array) {
  let result = (array.length > 1) ? array.slice(1) : [];
  return result;
};

// Test Code
const words = ['hello', 'lighthouse', 'labs'];
const result = tail(words);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "labs"); // ensure second element is "Labs"

const word = ['hello'];
const result2 = tail(word);

assertEqual(result2.length, 0); // ensure we get back zero elements

const empty = [];
const result3 = tail(empty);

assertEqual(result3.length, 0); // ensure we get back zero elements