const path = require('path');
const knuthMorrisPrattMatch = require(path.join(__dirname, '..', 'algorithms', 'knuthMorrisPrattMatch.js'));
const expect = require('chai').expect;
describe('Knuth-Morris-Pratt Match Algorithm: knuthMorrisPrattMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(knuthMorrisPrattMatch('test', 'est')).to.eql(1);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(knuthMorrisPrattMatch('test', 'xyz')).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(knuthMorrisPrattMatch('test', 'xyzsda')).to.eql(-1);
  });
  it('Should return an error message if the input is not a string.', () => {
    expect(knuthMorrisPrattMatch(3, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattMatch(['test'], 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattMatch(undefined, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattMatch(null, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattMatch({}, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattMatch(true, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
  });
  it('Should return an error message if the pattern is not a string.', () => {
    expect(knuthMorrisPrattMatch('test', 3)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattMatch('test', ['test'])).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattMatch('test')).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattMatch('test', null)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattMatch('test', {})).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattMatch('test', true)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
  });
});
