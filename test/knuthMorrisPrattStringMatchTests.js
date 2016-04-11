const path = require('path');
const knuthMorrisPrattStringMatch = require(path.join(__dirname, '..', 'algorithms', 'knuthMorrisPrattStringMatch.js'));
const expect = require('chai').expect;
describe('Knuth-Morris-Pratt String Match Algorithm: knuthMorrisPrattStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'est')).to.eql(1);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyz')).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyzsda')).to.eql(-1);
  });
  it('Should return an error message if the input is not a string.', () => {
    expect(knuthMorrisPrattStringMatch(3, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattStringMatch(['test'], 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattStringMatch(undefined, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattStringMatch(null, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattStringMatch({}, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
    expect(knuthMorrisPrattStringMatch(true, 'st')).to.eql('Knuth-Morris-Pratt Match: The input must be a string.');
  });
  it('Should return an error message if the pattern is not a string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 3)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattStringMatch('test', ['test'])).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattStringMatch('test')).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattStringMatch('test', null)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattStringMatch('test', {})).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
    expect(knuthMorrisPrattStringMatch('test', true)).to.eql('Knuth-Morris-Pratt Match: The pattern must be a string.');
  });
});
