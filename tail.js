// tail.js

const assertEqual = require('./assertEqual');

const tail = function(array) {
  let result = (array.length > 1) ? array.slice(1) : [];
  return result;
};

module.exports = tail;