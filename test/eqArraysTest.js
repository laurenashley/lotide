// test/assertEqualTest.js

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

const a = [1, 2, 3];
const b = [3, 2, 1];
const c = ['1', '2', '3'];
const d = ['1', '2', 3];

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays(a, a), true);
  });
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays(a, b), false);
  });
  it("returns true for eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(c, c), true);
  });
  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays(c, d), false);
  });
});