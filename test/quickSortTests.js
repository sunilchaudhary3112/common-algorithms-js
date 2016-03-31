const path = require('path');
const quickSort = require(path.join(__dirname, '..', 'algorithms', 'quickSort.js'));
const expect = require('chai').expect;
describe('Quick Sort Algorithm: quickSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(quickSort([5, 4, 14, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 14].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(quickSort(3)).to.eql('Quick Sort: The input must be an array.');
    expect(quickSort('test')).to.eql('Quick Sort: The input must be an array.');
    expect(quickSort()).to.eql('Quick Sort: The input must be an array.');
    expect(quickSort(null)).to.eql('Quick Sort: The input must be an array.');
    expect(quickSort({})).to.eql('Quick Sort: The input must be an array.');
    expect(quickSort(true)).to.eql('Quick Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(quickSort([10, 11, 'hello'])).to.eql('Quick Sort: The input must be an array consisting solely of numbers.');
    expect(quickSort([10, 11, {}])).to.eql('Quick Sort: The input must be an array consisting solely of numbers.');
    expect(quickSort([10, 11, null])).to.eql('Quick Sort: The input must be an array consisting solely of numbers.');
    expect(quickSort([10, 11, true])).to.eql('Quick Sort: The input must be an array consisting solely of numbers.');
  });
});
