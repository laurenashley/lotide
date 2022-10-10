// eqObjects.js

const eqArrays = require('./eqArrays');

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
      }
      // when false stop looping
      if (!isMatch) {
        break;
      }
    }
  }

  return isMatch;
};

module.exports = eqObjects;