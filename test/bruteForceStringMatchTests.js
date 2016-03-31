const path = require('path');
const bruteForceStringMatch = require(path.join(__dirname, '..', 'algorithms', 'bruteForceStringMatch.js'));
const expect = require('chai').expect;
describe('Brute Force String Match Algorithm: bruteForceStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(bruteForceStringMatch('test', 'est')).to.eql(1);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(bruteForceStringMatch('test', 'xyz')).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(bruteForceStringMatch('test', 'xyzsda')).to.eql(-1);
  });
  it('Should return an error message if the input is not a string.', () => {
    expect(bruteForceStringMatch(3, 'st')).to.eql('Brute Force String Match: The input must be a string.');
    expect(bruteForceStringMatch(['test'], 'st')).to.eql('Brute Force String Match: The input must be a string.');
    expect(bruteForceStringMatch(undefined, 'st')).to.eql('Brute Force String Match: The input must be a string.');
    expect(bruteForceStringMatch(null, 'st')).to.eql('Brute Force String Match: The input must be a string.');
    expect(bruteForceStringMatch({}, 'st')).to.eql('Brute Force String Match: The input must be a string.');
    expect(bruteForceStringMatch(true, 'st')).to.eql('Brute Force String Match: The input must be a string.');
  });
  it('Should return an error message if the pattern is not a string.', () => {
    expect(bruteForceStringMatch('test', 3)).to.eql('Brute Force String Match: The pattern must be a string.');
    expect(bruteForceStringMatch('test', ['test'])).to.eql('Brute Force String Match: The pattern must be a string.');
    expect(bruteForceStringMatch('test')).to.eql('Brute Force String Match: The pattern must be a string.');
    expect(bruteForceStringMatch('test', null)).to.eql('Brute Force String Match: The pattern must be a string.');
    expect(bruteForceStringMatch('test', {})).to.eql('Brute Force String Match: The pattern must be a string.');
    expect(bruteForceStringMatch('test', true)).to.eql('Brute Force String Match: The pattern must be a string.');
  });
});
