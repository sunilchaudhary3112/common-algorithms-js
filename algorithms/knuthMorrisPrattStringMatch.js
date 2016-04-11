/*
  A JavaScript module which performs a Knuth-Morris-Pratt string match to determine whether a given value exists within an input string.  If the specified value is found, the index of the value string inside the input string is returned.  If the specified value is not found in the input string -1 is returned.  Slightly modified from an existing JavaScript implementation.
  Citation: 2016. Nayuki.Io. https://www.nayuki.io/res/knuth-morris-pratt-string-matching/kmpstringmatcher.js.
*/
module.exports = exports = function(input, pattern) {
  if (typeof input !== 'string') return 'Knuth-Morris-Pratt String Match: The input must be a string.';
  if (typeof pattern !== 'string') return 'Knuth-Morris-Pratt String Match: The pattern must be a string.';
  if (pattern.length > input.length || pattern.length === 0) return -1;
  var longestSuffixPrefix = [0];
  for (var i = 1; i < pattern.length; i++) {
    var j = longestSuffixPrefix[i - 1];
    while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) j = longestSuffixPrefix[j - 1];
    if (pattern.charAt(i) === pattern.charAt(j)) j += 1;
    longestSuffixPrefix.push(j);
  }
  var j = 0;
  for (var i = 0; i < input.length; i++) {
    while (j > 0 && input.charAt(i) !== pattern.charAt(j)) j = longestSuffixPrefix[j - 1];
    if (input.charAt(i) === pattern.charAt(j)) {
      j += 1;
      if (j === pattern.length) return i - (j - 1);
    }
  }
  return -1;
};
