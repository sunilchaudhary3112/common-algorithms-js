const path = require('path');
const longestCommonSubsequence = require(path.join(__dirname, '..', 'algorithms', 'longestCommonSubsequence.js'));
const expect = require('chai').expect;
describe('Longest Common Subsequence Algorithm: longestCommonSubsequence(inputString1, inputString2)', () => {
  it('Should return the Longest Common Subsequence in the input strings when there is at least one common character.', () => {
    expect(longestCommonSubsequence('test', 'es')).to.eql('es');
    expect(longestCommonSubsequence('tex', 'esr')).to.eql('e');
  });
  it('Should return -1 when there are no common substrings in the input strings.', () => {
    expect(longestCommonSubsequence('test', 'xyz')).to.eql(-1);
  });
  it('Should return an error message if either the input is not a string.', () => {
    expect(longestCommonSubsequence(3, 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
    expect(longestCommonSubsequence(['test'], 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
    expect(longestCommonSubsequence(undefined, 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
    expect(longestCommonSubsequence(null, 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
    expect(longestCommonSubsequence({}, 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
    expect(longestCommonSubsequence(true, 'st')).to.eql('Longest Common Subsequence: The input arguments must be strings.');
  });
  it('Should return an error message if either input string is empty.', () => {
    expect(longestCommonSubsequence('test', '')).to.eql('Longest Common Subsequence: Neither input string may be empty.');
    expect(longestCommonSubsequence('', 'test')).to.eql('Longest Common Subsequence: Neither input string may be empty.');
  });
});
