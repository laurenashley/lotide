// test/findKeyByValueTest.js

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Test Code
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns 'sci_fi' for 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
  });
  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
  });
});
