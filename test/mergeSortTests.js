const path = require('path');
const mergeSort = require(path.join(__dirname, '..', 'algorithms', 'mergeSort.js'));
const expect = require('chai').expect;
describe('Merge Sort Algorithm: mergeSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(mergeSort(3)).to.eql('Merge Sort: The input must be an array.');
    expect(mergeSort('test')).to.eql('Merge Sort: The input must be an array.');
    expect(mergeSort()).to.eql('Merge Sort: The input must be an array.');
    expect(mergeSort(null)).to.eql('Merge Sort: The input must be an array.');
    expect(mergeSort({})).to.eql('Merge Sort: The input must be an array.');
    expect(mergeSort(true)).to.eql('Merge Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(mergeSort([10, 11, 'hello'])).to.eql('Merge Sort: The input must be an array consisting solely of numbers.');
    expect(mergeSort([10, 11, {}])).to.eql('Merge Sort: The input must be an array consisting solely of numbers.');
    expect(mergeSort([10, 11, null])).to.eql('Merge Sort: The input must be an array consisting solely of numbers.');
    expect(mergeSort([10, 11, true])).to.eql('Merge Sort: The input must be an array consisting solely of numbers.');
  });
});
