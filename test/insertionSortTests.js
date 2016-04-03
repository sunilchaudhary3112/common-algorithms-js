const path = require('path');
const insertionSort = require(path.join(__dirname, '..', 'algorithms', 'insertionSort.js'));
const expect = require('chai').expect;
describe('Insertion Sort Algorithm: insertionSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(insertionSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(insertionSort(3)).to.eql('Insertion Sort: The input must be an array.');
    expect(insertionSort('test')).to.eql('Insertion Sort: The input must be an array.');
    expect(insertionSort()).to.eql('Insertion Sort: The input must be an array.');
    expect(insertionSort(null)).to.eql('Insertion Sort: The input must be an array.');
    expect(insertionSort({})).to.eql('Insertion Sort: The input must be an array.');
    expect(insertionSort(true)).to.eql('Insertion Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(insertionSort([10, 11, 'hello'])).to.eql('Insertion Sort: The input must be an array consisting solely of numbers.');
    expect(insertionSort([10, 11, {}])).to.eql('Insertion Sort: The input must be an array consisting solely of numbers.');
    expect(insertionSort([10, 11, null])).to.eql('Insertion Sort: The input must be an array consisting solely of numbers.');
    expect(insertionSort([10, 11, true])).to.eql('Insertion Sort: The input must be an array consisting solely of numbers.');
  });
});
