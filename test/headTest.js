// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([57, 312, 0]), 57);
assertEqual(head([57, 312, 0]), 312);