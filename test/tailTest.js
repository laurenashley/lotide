// test/tailTest.js

const assert = require('chai').assert;
const tail = require('../tail');


// Test Code
const words = ['hello', 'lighthouse', 'labs'];
const result = tail(words);

const word = ['hello'];
const result2 = tail(word);

const empty = [];
const result3 = tail(empty);

describe("#head", () => {
  it("returns ['lighthouse', 'labs'] for result", () => {
    assert.deepEqual(result, ['lighthouse', 'labs']);
  });
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], 'lighthouse');
  });
  it("returns 'labs' for result[1]", () => {
    assert.strictEqual(result[1], 'labs');
  });
  it("returns 0 for result2.length", () => {
    assert.strictEqual(result2.length, 0);
  });
  it("returns 0 for result3.length", () => {
    assert.strictEqual(result3.length, 0);
  });
});

// TO DO write more tests and use deepEqual