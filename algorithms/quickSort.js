/*
  A JavaScript module which performs a quick sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  return quickSort(input);
};
function quickSort(input, first, last) {
  if (typeof first === 'undefined') first = 0;
  if (typeof last === 'undefined') last = input.length - 1;
  if (first < last) {
    var swap = null;
    var pivot = first;
    var lowIndex = first;
    var highIndex = last;
    while (lowIndex < highIndex) {
      while (input[lowIndex] <= input[pivot] && lowIndex < last) lowIndex += 1;
      while (input[highIndex] > input[pivot]) highIndex -= 1;
      if (lowIndex < highIndex) {
        swap = input[lowIndex];
        input[lowIndex] = input[highIndex];
        input[highIndex] = swap;
      }
    }
    swap = input[pivot];
    input[pivot] = input[highIndex];
    input[highIndex] = swap;
    quickSort(input, first, highIndex - 1);
    quickSort(input, highIndex + 1, last);
  }
  return input;
}
