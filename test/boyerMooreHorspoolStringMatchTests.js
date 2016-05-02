const path = require('path');
const boyerMooreHorspoolStringMatch = require(path.join(__dirname, '..', 'algorithms', 'boyerMooreHorspoolStringMatch.js'));
const expect = require('chai').expect;
describe('Boyer-Moore-Horspool String Match Algorithm: boyerMooreHorspoolStringMatch(input, pattern, alphabetSize)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'test', 256)).to.eql(0);
    expect(boyerMooreHorspoolStringMatch('test', 'est', 256)).to.eql(1);
    expect(boyerMooreHorspoolStringMatch('teststst', 'st', 256)).to.eql(2);
    expect(boyerMooreHorspoolStringMatch('teststst', 't', 256)).to.eql(0);
  });
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyz', 256)).to.eql(-1);
  });
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyzsda', 256)).to.eql(-1);
  });
});
