// test/assertEqualTest.js

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

const a = [1, 2, 3];
const A = [5];
const b = [3, 2, 1];
const B = [6];
const c = ['1', '2', '3'];
const d = ['1', '2', 3];
const C = [[2, 3], [4]];
const D = [[2, 3], 4];

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
  it('handles a single item array fine', () => {
    assert.strictEqual(eqArrays(A, B), false);
  });
  it('handles one level of nesting in equal arrays fine', () => {
    assert.strictEqual(eqArrays(C, C), true);
  });
  it('handles multiple levels of nesting in unequal arrays fine', () => {
    assert.strictEqual(eqArrays(C, D), false);
  });
});