const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  let middleVals = [];

  // if array has only 1 or 2 elements return empty array
  if (array.length > 2) {
    // determine if length is even or odd
    const isEven = (array.length % 2 === 0);
    const half = Math.floor(array.length / 2);
    
    if (isEven) {
      // even: divide array into 2 equal parts
      const firstHalf = array.slice(0, half);
      const secondHalf = array.slice(half);
      
      // push tail of first array and head of second array to result
      middleVals.push(firstHalf[firstHalf.length - 1], secondHalf[0]);
    } else {
      // odd: divide by 2, use whole number as index for slice start
      middleVals = array[half];
    }
  }
  // console.log(middleVals);
  return middleVals;
};

module.exports = middle;