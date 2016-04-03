const path = require('path');
const knuthShuffle = require(path.join(__dirname, '..', 'algorithms', 'knuthShuffle.js'));
const expect = require('chai').expect;
describe('Knuth Shuffle Algorithm: knuthShuffle(input)', () => {
  it('Should return the input array with its indices\' values shuffled.', () => {
    expect(knuthShuffle([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.not.eql([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(knuthShuffle(3)).to.eql('Knuth Shuffle: The input must be an array.');
    expect(knuthShuffle('test')).to.eql('Knuth Shuffle: The input must be an array.');
    expect(knuthShuffle()).to.eql('Knuth Shuffle: The input must be an array.');
    expect(knuthShuffle(null)).to.eql('Knuth Shuffle: The input must be an array.');
    expect(knuthShuffle({})).to.eql('Knuth Shuffle: The input must be an array.');
    expect(knuthShuffle(true)).to.eql('Knuth Shuffle: The input must be an array.');
  });
});
