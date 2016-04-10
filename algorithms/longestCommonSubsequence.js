/*
  A JavaScript module which resolves the longest common subsequence inside two input strings.  If there is  a subsequence, the longest one is returned.  If there is no common subsequence, -1 is returned.  Adapted from an existing JavaScript implementation.
  Citation: "Algorithm Implementation/Strings/Longest Common Subsequence - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_subsequence#JavaScript.
*/
module.exports = exports = function(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 'Longest Common Subsequence: The input arguments must be strings.';
  if (s1.length === 0 || s2.length === 0) return 'Longest Common Subsequence: Neither input string may be empty.';
  var c = [];
  for (var i = 0; i <= s1.length; i++) c.push([0]);
  for (var i = 0; i < s2.length; i++) c[0].push(0);
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) c[i + 1][j + 1] = s1[i] === s2[j] ? c[i][j] + 1 : Math.max(c[i + 1][j], c[i][j + 1]);
  }
  var sequence = (function backTrack(n1, n2) {
    if (n1 * n2 === 0) return '';
    if (s1[n1 - 1] === s2[n2 - 1]) return backTrack(n1 - 1, n2 - 1) + s1[n1 - 1];
    return c[n1][n2 - 1] > c[n1 - 1][n2] ? backTrack(n1, n2 - 1) : backTrack(n1 - 1, n2);
  })(s1.length, s2.length);
  if (sequence === '') sequence = -1;
  return sequence;
};
