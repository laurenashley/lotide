// Function Implementation
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

// Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(5, 1);
assertEqual('Lauren', 'Lauren');