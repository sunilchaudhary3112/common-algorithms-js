const path = require('path');
const boyerMooreStringMatch = require(path.join(__dirname, '..', 'algorithms', 'boyerMooreStringMatch.js'));
const expect = require('chai').expect;
describe('Boyer-Moore String Match Algorithm: boyerMooreStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(boyerMooreStringMatch('test', 'test')).to.eql(0);
    expect(boyerMooreStringMatch('test', 'est')).to.eql(1);
    expect(boyerMooreStringMatch('teststst', 'st')).to.eql(2);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(boyerMooreStringMatch('test', 'xyz')).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(boyerMooreStringMatch('test', 'xyzsda')).to.eql(-1);
  });
  it('Should return an error message if the input is not a string.', () => {
    expect(boyerMooreStringMatch(3, 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
    expect(boyerMooreStringMatch(['test'], 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
    expect(boyerMooreStringMatch(undefined, 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
    expect(boyerMooreStringMatch(null, 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
    expect(boyerMooreStringMatch({}, 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
    expect(boyerMooreStringMatch(true, 'st')).to.eql('Boyer-Moore String Match: The input must be a string.');
  });
  it('Should return an error message if the pattern is not a string.', () => {
    expect(boyerMooreStringMatch('test', 3)).to.eql('Boyer-Moore String Match: The pattern must be a string.');
    expect(boyerMooreStringMatch('test', ['test'])).to.eql('Boyer-Moore String Match: The pattern must be a string.');
    expect(boyerMooreStringMatch('test')).to.eql('Boyer-Moore String Match: The pattern must be a string.');
    expect(boyerMooreStringMatch('test', null)).to.eql('Boyer-Moore String Match: The pattern must be a string.');
    expect(boyerMooreStringMatch('test', {})).to.eql('Boyer-Moore String Match: The pattern must be a string.');
    expect(boyerMooreStringMatch('test', true)).to.eql('Boyer-Moore String Match: The pattern must be a string.');
  });
});
