const path = require('path');
const rabinKarpStringMatch = require(path.join(__dirname, '..', 'algorithms', 'rabinKarpStringMatch.js'));
const expect = require('chai').expect;
describe('Rabin-Karp String Match Algorithm: rabinKarpStringMatch(input, pattern, check)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(rabinKarpStringMatch('test', 'test', false)).to.eql(0);
    expect(rabinKarpStringMatch('test', 'est', false)).to.eql(1);
    expect(rabinKarpStringMatch('teststst', 'st', false)).to.eql(2);
    expect(rabinKarpStringMatch('test', 'test', true)).to.eql(0);
    expect(rabinKarpStringMatch('test', 'est', true)).to.eql(1);
    expect(rabinKarpStringMatch('teststst', 'st', true)).to.eql(2);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(rabinKarpStringMatch('test', 'xyz', true)).to.eql(-1);
    expect(rabinKarpStringMatch('test', 'xyz', false)).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(rabinKarpStringMatch('test', 'xyzsda', true)).to.eql(-1);
    expect(rabinKarpStringMatch('test', 'xyzsda', false)).to.eql(-1);
  });
  it('Should return an error message if the input is not a string.', () => {
    expect(rabinKarpStringMatch(3, 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
    expect(rabinKarpStringMatch(['test'], 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
    expect(rabinKarpStringMatch(undefined, 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
    expect(rabinKarpStringMatch(null, 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
    expect(rabinKarpStringMatch({}, 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
    expect(rabinKarpStringMatch(true, 'st', true)).to.eql('Rabin-Karp String Match: The input must be a string.');
  });
  it('Should return an error message if the pattern is not a string.', () => {
    expect(rabinKarpStringMatch('test', 3, true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
    expect(rabinKarpStringMatch('test', ['test'], true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
    expect(rabinKarpStringMatch('test', true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
    expect(rabinKarpStringMatch('test', null, true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
    expect(rabinKarpStringMatch('test', {}, true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
    expect(rabinKarpStringMatch('test', true, true)).to.eql('Rabin-Karp String Match: The pattern must be a string.');
  });
  it('Should return an error message if the check is not a boolean.', () => {
    expect(rabinKarpStringMatch('3', 'st', 3)).to.eql('Rabin-Karp String Match: The check must be a boolean.');
    expect(rabinKarpStringMatch('[true]', 'st', [true])).to.eql('Rabin-Karp String Match: The check must be a boolean.');
    expect(rabinKarpStringMatch('undefined', 'st')).to.eql('Rabin-Karp String Match: The check must be a boolean.');
    expect(rabinKarpStringMatch('null', 'st', null)).to.eql('Rabin-Karp String Match: The check must be a boolean.');
    expect(rabinKarpStringMatch('s', 'st', {})).to.eql('Rabin-Karp String Match: The check must be a boolean.');
    expect(rabinKarpStringMatch('true', 'st', 'true')).to.eql('Rabin-Karp String Match: The check must be a boolean.');
  });
});
