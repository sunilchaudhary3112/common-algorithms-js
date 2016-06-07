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
exports.durstenfeldShuffle = require(path.join('algorithms', 'durstenfeldShuffle'));
exports.depthFirstSearch = require(path.join('algorithms', 'depthFirstSearch'));
exports.breadthFirstSearch = require(path.join('algorithms', 'breadthFirstSearch'));
exports.longestCommonSubstring = require(path.join('algorithms', 'longestCommonSubstring'));
exports.longestCommonSubsequence = require(path.join('algorithms', 'longestCommonSubsequence'));
exports.levenshteinDistance = require(path.join('algorithms', 'levenshteinDistance'));
exports.knuthMorrisPrattStringMatch = require(path.join('algorithms', 'knuthMorrisPrattStringMatch'));
exports.rabinKarpStringMatch = require(path.join('algorithms', 'rabinKarpStringMatch'));
exports.boyerMooreStringMatch = require(path.join('algorithms', 'boyerMooreStringMatch'));
exports.boyerMooreHorspoolStringMatch = require(path.join('algorithms', 'boyerMooreHorspoolStringMatch'));
exports.sorensonDiceCoefficient = require(path.join('algorithms', 'sorensonDiceCoefficient'));
exports.bucketSort = require(path.join('algorithms', 'bucketSort'));
exports.shellSort = require(path.join('algorithms', 'shellSort'));
exports.damerauLevenshteinDistance = require(path.join('algorithms', 'damerauLevenshteinDistance'));
exports.countingSort = require(path.join('algorithms', 'countingSort'));
module.exports = exports;
