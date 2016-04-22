const path = require('path');
const damerauLevenshteinDistance = require(path.join(__dirname, '..', 'algorithms', 'damerauLevenshteinDistance.js'));
const expect = require('chai').expect;
describe('Damerau-Levenshtein Distance Algorithm: damerauLevenshteinDistance(input1, input2)', () => {
  it('Should return the Damerau-Levenshtein distance between the input strings.', () => {
    expect(damerauLevenshteinDistance('test', '')).to.eql(4);
    expect(damerauLevenshteinDistance('tex', 'esr')).to.eql(3);
    expect(damerauLevenshteinDistance('text', 'rext')).to.eql(1);
    expect(damerauLevenshteinDistance('ca', 'abc')).to.eql(2);
  });
  it('Should return an error message if either the input is not a string.', () => {
    expect(damerauLevenshteinDistance(3, 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
    expect(damerauLevenshteinDistance(['test'], 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
    expect(damerauLevenshteinDistance(undefined, 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
    expect(damerauLevenshteinDistance(null, 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
    expect(damerauLevenshteinDistance({}, 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
    expect(damerauLevenshteinDistance(true, 'st')).to.eql('Damerau-Levenshtein Distance: The input arguments must be strings.');
  });
});
