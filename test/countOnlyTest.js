// test/countOnlyTest.js

const assert = require('chai').assert;
const countOnly = require('../countOnly');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const namesCnt = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } for countOnly(firstNames, namesCnt)", () => {
    assert.deepEqual(countOnly(firstNames, namesCnt), { Fang: 2, Jason: 1 });
  });
});
