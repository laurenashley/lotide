// Function Implementation
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const findKey = (obj, cb) => {
  for (const item in obj) {
    const myObj = obj[item];

    if (!cb(myObj)) {
      return `Key is ${item}`;
    }
  }
};

// Test Code
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const obj1 = findKey({a:1, b:2}, x => x === 2);
const obj2 = findKey({a:3, b:2}, x => x === 2);
const obj3 = findKey({a:2, b:1}, x => x === 2);

console.log(assertEqual(obj1, obj2));
console.log(assertEqual(obj1, obj3));