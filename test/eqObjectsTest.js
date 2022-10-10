// test/eqObject.js
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };
const abd = { a: "1", b: "4", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns true for eqObjects(ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false for eqObjects(abc, abd)", () => {
    assert.strictEqual(eqObjects(abc, abd), false);
  });
  it("returns true for eqObjects(cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for eqObjects(cd, cd2)", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});