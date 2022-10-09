// findKeyByValue.js

const findKeyByValue = (obj, val) => {
  return Object.keys(obj).find(key => obj[key] === val);
};

module.exports = findKeyByValue;