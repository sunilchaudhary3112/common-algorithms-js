const path = require('path');
const shellSort = require(path.join(__dirname, '..', 'algorithms', 'shellSort.js'));
const expect = require('chai').expect;
describe('Shell Sort Algorithm: shellSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(shellSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(shellSort(3)).to.eql('Shell Sort: The input must be an array.');
    expect(shellSort('test')).to.eql('Shell Sort: The input must be an array.');
    expect(shellSort()).to.eql('Shell Sort: The input must be an array.');
    expect(shellSort(null)).to.eql('Shell Sort: The input must be an array.');
    expect(shellSort({})).to.eql('Shell Sort: The input must be an array.');
    expect(shellSort(true)).to.eql('Shell Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(shellSort([10, 11, 'hello'])).to.eql('Shell Sort: The input must be an array consisting solely of numbers.');
    expect(shellSort([10, 11, {}])).to.eql('Shell Sort: The input must be an array consisting solely of numbers.');
    expect(shellSort([10, 11, null])).to.eql('Shell Sort: The input must be an array consisting solely of numbers.');
    expect(shellSort([10, 11, true])).to.eql('Shell Sort: The input must be an array consisting solely of numbers.');
  });
});
