

module.exports = exports = function(input) {
  if (!Array.isArray(input)) return 'Shell Sort: The input must be an array.';
  for (var i = 0; i < input.length; i++) if (typeof input[i] !== 'number') return 'Shell Sort: The input must be an array consisting solely of numbers.';
  var gap = input.length;
  do {
    for (var i = gap; i < input.length; i++) {
      var value = input[i], j = i;
      while (j >= gap && input[j - gap] > value) {
        input[j] = input[j - gap];
        j -= gap;
      }
      input[j] = value;
    }
    gap = parseInt(gap / 2);
  } while (gap > 0)
  return input;
};
