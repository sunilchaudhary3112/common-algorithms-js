const path = require('path');
const binarySearch = require(path.join(__dirname, '..', 'algorithms', 'binarySearch.js'));
const expect = require('chai').expect;
describe('Binary Search Algorithm: binarySearch(input, value)', () => {
  it('Should return the index of the specified value when given an input array of numbers ordered from low to high wherein the specified value is contained.', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 2).toString()).to.eql((1).toString());
  });
  it('Should return -1 when the specified value does not exist in the input array of numbers ordered from low to high.', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 10).toString()).to.eql((-1).toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(binarySearch(3, 1)).to.eql('Binary Search: The input must be an array.');
    expect(binarySearch('test', 1)).to.eql('Binary Search: The input must be an array.');
    expect(binarySearch(undefined, 1)).to.eql('Binary Search: The input must be an array.');
    expect(binarySearch(null, 1)).to.eql('Binary Search: The input must be an array.');
    expect(binarySearch({}, 1)).to.eql('Binary Search: The input must be an array.');
    expect(binarySearch(true, 1)).to.eql('Binary Search: The input must be an array.');
  });
  it('Should return an error message if the value is not a number.', () => {
    expect(binarySearch([1, 2, 3], 'test')).to.eql('Binary Search: The value must be a number.');
    expect(binarySearch([1, 2, 3])).to.eql('Binary Search: The value must be a number.');
    expect(binarySearch([1, 2, 3], null)).to.eql('Binary Search: The value must be a number.');
    expect(binarySearch([1, 2, 3], {})).to.eql('Binary Search: The value must be a number.');
    expect(binarySearch([1, 2, 3], true)).to.eql('Binary Search: The value must be a number.');
  });
  it('Should return an error message if any elements of the input array is not a number or the numbers in the array are not ordered from low to high.', () => {
    expect(binarySearch([10, 11, 'hello'], 1)).to.eql('Binary Search: The input must be an array consisting solely of numbers that are ordered from low to high.');
    expect(binarySearch([10, 11, {}], 1)).to.eql('Binary Search: The input must be an array consisting solely of numbers that are ordered from low to high.');
    expect(binarySearch([10, 11, null], 1)).to.eql('Binary Search: The input must be an array consisting solely of numbers that are ordered from low to high.');
    expect(binarySearch([10, 11, true], 1)).to.eql('Binary Search: The input must be an array consisting solely of numbers that are ordered from low to high.');
    expect(binarySearch([10,9,1,35], 1)).to.eql('Binary Search: The input must be an array consisting solely of numbers that are ordered from low to high.');
  });
});
