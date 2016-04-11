/*
  A JavaScript module which includes several common algorithms.
*/
const path = require('path');
exports.selectionSort = require(path.join('algorithms', 'selectionSort'));
exports.bubbleSort = require(path.join('algorithms', 'bubbleSort'));
exports.linearSearch = require(path.join('algorithms', 'linearSearch'));
exports.bruteForceStringMatch = require(path.join('algorithms', 'bruteForceStringMatch'));
exports.mergeSort = require(path.join('algorithms', 'mergeSort'));
exports.quickSort = require(path.join('algorithms', 'quickSort'));
exports.binarySearch = require(path.join('algorithms', 'binarySearch'));
exports.insertionSort = require(path.join('algorithms', 'insertionSort'));
exports.knuthShuffle = require(path.join('algorithms', 'knuthShuffle'));
exports.depthFirstSearch = require(path.join('algorithms', 'depthFirstSearch'));
exports.breadthFirstSearch = require(path.join('algorithms', 'breadthFirstSearch'));
exports.longestCommonSubstring = require(path.join('algorithms', 'longestCommonSubstring'));
exports.longestCommonSubsequence = require(path.join('algorithms', 'longestCommonSubsequence'));
exports.levenshteinDistance = require(path.join('algorithms', 'levenshteinDistance'));
exports.knuthMorrisPrattMatch = require(path.join('algorithms', 'knuthMorrisPrattMatch'));
module.exports = exports;
