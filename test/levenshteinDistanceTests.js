const path = require('path');
const levenshteinDistance = require(path.join(__dirname, '..', 'algorithms', 'levenshteinDistance.js'));
const expect = require('chai').expect;
describe('Levenshtein Distance Algorithm: levenshteinDistance(input1, input2)', () => {
  it('Should return the levenshtein distance between the input strings.', () => {
    expect(levenshteinDistance('test', '')).to.eql(4);
    expect(levenshteinDistance('tex', 'esr')).to.eql(3);
    expect(levenshteinDistance('text', 'rext')).to.eql(1);
  });
  it('Should return an error message if either the input is not a string.', () => {
    expect(levenshteinDistance(3, 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
    expect(levenshteinDistance(['test'], 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
    expect(levenshteinDistance(undefined, 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
    expect(levenshteinDistance(null, 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
    expect(levenshteinDistance({}, 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
    expect(levenshteinDistance(true, 'st')).to.eql('Levenshtein Distance: The input arguments must be strings.');
  });
});
