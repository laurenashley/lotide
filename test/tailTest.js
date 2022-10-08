// test/tailTest.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Code
const words = ['hello', 'lighthouse', 'labs'];
const result = tail(words);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "labs"); // ensure second element is "Labs"

const word = ['hello'];
const result2 = tail(word);

assertEqual(result2.length, 0); // ensure we get back zero elements

const empty = [];
const result3 = tail(empty);

assertEqual(result3.length, 0); // ensure we get back zero elements