/*
  A JavaScript module which includes several common algorithms.
*/
const path = require('path');
exports.selectionSort = require(path.join('algorithms', 'selectionSort'));
exports.bubbleSort = require(path.join('algorithms', 'bubbleSort'));
exports.linearSearch = require(path.join('algorithms', 'linearSearch'));
module.exports = exports;
