// test/headTest.js

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns 'Lighthouse' for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Lighthouse', 'Labs']), 'Lighthouse');
  });
  it("returns 57 for [57, 312, 0]", () => {
    assert.strictEqual(head([57, 312, 0]), 57);
  });
  it("returns 312 for [312, 57, 0]", () => {
    assert.strictEqual(head([312, 57, 0]), 312);
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
});