const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["I'm the only element in this array"]), "I'm the only element in this array");
assertEqual(head([89, 90, 3]), 45);