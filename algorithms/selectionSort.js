/*
  A JavaScript Module which performs a selection sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function selectionSort(input) {
  if (!Array.isArray(input)) return 'Selection Sort: The input must be an array.';
  for (var i = 0; i < input.length; i++) if (typeof input[i] !== 'number') return 'Selection Sort: The input must be an array consisting solely of numbers.';
  for (var i = 0; i < input.length; i++) {
    var min = i;
    for (var j = i; j < input.length; j++) if (input[j] < input[min]) min = j;
    var swap = input[i];
    input[i] = input[min];
    input[min] = swap;
  }
  return input;
};
