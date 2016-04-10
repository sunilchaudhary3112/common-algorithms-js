const path = require('path');
const longestCommonSubstring = require(path.join(__dirname, '..', 'algorithms', 'longestCommonSubstring.js'));
const expect = require('chai').expect;
describe('Longest Common Substring Algorithm: longestCommonSubstring(inputString1, inputString2)', () => {
  it('Should return the longest common substring in the input strings when there is at least one common substring.', () => {
    expect(longestCommonSubstring('test', 'est')).to.eql('est');
    expect(longestCommonSubstring('tes', 'est')).to.eql('es');
  });
  it('Should return -1 when there are no common substrings in the input strings.', () => {
    expect(longestCommonSubstring('test', 'xyz')).to.eql(-1);
  });
  it('Should return an error message if either the input is not a string.', () => {
    expect(longestCommonSubstring(3, 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
    expect(longestCommonSubstring(['test'], 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
    expect(longestCommonSubstring(undefined, 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
    expect(longestCommonSubstring(null, 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
    expect(longestCommonSubstring({}, 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
    expect(longestCommonSubstring(true, 'st')).to.eql('Longest Common Substring: The input arguments must be strings.');
  });
  it('Should return an error message if either input string is empty.', () => {
    expect(longestCommonSubstring('test', '')).to.eql('Longest Common Substring: Neither input string may be empty.');
    expect(longestCommonSubstring('', 'test')).to.eql('Longest Common Substring: Neither input string may be empty.');
  });
});
