// eqArrays.js

const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  if (first.length === 0 && second.length === 0) {
    return true;
  }

  const firstElement = first[0];
  const secondElement = second[0];

  if (firstElement !== secondElement) {
    return false;
  }

  return eqArrays(first.slice(1), second.slice(1));
};

module.exports = eqArrays;