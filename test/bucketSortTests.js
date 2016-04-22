const path = require('path');
const bucketSort = require(path.join(__dirname, '..', 'algorithms', 'bucketSort.js'));
const expect = require('chai').expect;
describe('Bucket Sort Algorithm: bucketSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(bucketSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26], 5).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString());
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(bucketSort(3, 5)).to.eql('Bucket Sort: The input must be an array.');
    expect(bucketSort('test', 5)).to.eql('Bucket Sort: The input must be an array.');
    expect(bucketSort()).to.eql('Bucket Sort: The input must be an array.');
    expect(bucketSort(null, 5)).to.eql('Bucket Sort: The input must be an array.');
    expect(bucketSort({}, 5)).to.eql('Bucket Sort: The input must be an array.');
    expect(bucketSort(true, 5)).to.eql('Bucket Sort: The input must be an array.');
  });
  it('Should return an error message if any elements of the input array is not a number.', () => {
    expect(bucketSort([10, 11, 'hello'], 5)).to.eql('Bucket Sort: The input must be an array consisting solely of numbers.');
    expect(bucketSort([10, 11, {}, 5])).to.eql('Bucket Sort: The input must be an array consisting solely of numbers.');
    expect(bucketSort([10, 11, null], 5)).to.eql('Bucket Sort: The input must be an array consisting solely of numbers.');
    expect(bucketSort([10, 11, true], 5)).to.eql('Bucket Sort: The input must be an array consisting solely of numbers.');
  });
  it('Should return an error message if the bucket size is less than 1.', () => {
    expect(bucketSort([10, 1, 19], 0)).to.eql('Bucket Sort: The bucket size must be greater than zero.');
  });
});
