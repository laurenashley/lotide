// flatten.js

const flatten = (array) => {
  let flattened = [];

  array.forEach(e => {
    const isArray = Array.isArray(e);

    if (isArray) {
      e.forEach(i => {
        flattened.push(i);
      });
    } else {
      flattened.push(e);
    }
  });
  return flattened;
};

module.exports = flatten;