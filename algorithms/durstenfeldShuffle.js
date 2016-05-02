/*
  A JavaScript module which performs a Durstenfeld shuffle on a given array.
*/
module.exports = exports = function(input) {
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
