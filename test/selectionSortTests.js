const path = require('path');
const selectionSort = require(path.join(__dirname, '..', 'algorithms', 'selectionSort.js'));
const expect = require('chai').expect;
describe('Selection Sort Algorithm', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(selectionSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(selectionSort(3)).to.eql('Selection Sort: The input must be an array.');
    expect(selectionSort('test')).to.eql('Selection Sort: The input must be an array.');
    expect(selectionSort()).to.eql('Selection Sort: The input must be an array.');
    expect(selectionSort(null)).to.eql('Selection Sort: The input must be an array.');
    expect(selectionSort({})).to.eql('Selection Sort: The input must be an array.');
    expect(selectionSort(true)).to.eql('Selection Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(selectionSort([10, 11, 'hello'])).to.eql('Selection Sort: The input must be an array consisting solely of numbers.');
    expect(selectionSort([10, 11, {}])).to.eql('Selection Sort: The input must be an array consisting solely of numbers.');
    expect(selectionSort([10, 11, null])).to.eql('Selection Sort: The input must be an array consisting solely of numbers.');
    expect(selectionSort([10, 11, true])).to.eql('Selection Sort: The input must be an array consisting solely of numbers.');
  });
});
