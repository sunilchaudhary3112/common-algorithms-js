/*
  A JavaScript module which performs a Knuth shuffle on a given array.
*/
module.exports = exports = function(input) {
  if (!Array.isArray(input)) return 'Knuth Shuffle: The input must be an array.';
  var index = input.length;
  while (0 !== index) {
    var shuffleIndex = Math.floor(Math.random() * index);
    index -= 1;
    var swap = input[index];
    input[index] = input[shuffleIndex];
    input[shuffleIndex] = swap;
  }
  return input;
}
