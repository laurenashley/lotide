// Implement Functions
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const head = function(array) {
  return array[0];
};

//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([57, 312, 0]), 57);
assertEqual(head([57, 312, 0]), 312);