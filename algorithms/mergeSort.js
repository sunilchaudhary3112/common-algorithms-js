/*
  A JavaScript module which performs a merge sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  return partition(input, 0, input.length - 1);
};
function partition(input, low, high) {
  if (low < high) {
    var mid = parseInt((low + high) / 2, 10);
    partition(input, low, mid);
    partition(input, mid + 1, high);
    return merge(input, low, mid, high);
  }
  return input;
}
function merge(input, low, mid, high) {
  var index = low, lowIndex = low, midIndex = mid + 1, holder = [];
  while (lowIndex <= mid && midIndex <= high) {
    if (input[lowIndex] <= input[midIndex]) {
      holder[index] = input[lowIndex];
      lowIndex += 1;
    } else {
      holder[index] = input[midIndex];
      midIndex += 1;
    }
    index += 1;
  }
  if (lowIndex > mid) {
    for (var k = midIndex; k <= high; k++) {
      holder[index] = input[k];
      index += 1;
    }
  } else {
    for (var k = lowIndex; k <= mid; k++) {
      holder[index] = input[k];
      index += 1;
    }
  }
  for (var k = low; k <= high; k++) input[k] = holder[k];
  return input;
}
