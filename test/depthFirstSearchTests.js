const path = require('path');
const depthFirstSearch = require(path.join(__dirname, '..', 'algorithms', 'depthFirstSearch.js'));
const expect = require('chai').expect;
describe('Depth First Search Algorithm: depthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(true);
    expect(depthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true);
  });
  it('Should return false when given a disconncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(false);
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(depthFirstSearch(3)).to.eql('Depth First Search: The input must be an array.');
    expect(depthFirstSearch('test')).to.eql('Depth First Search: The input must be an array.');
    expect(depthFirstSearch()).to.eql('Depth First Search: The input must be an array.');
    expect(depthFirstSearch(null)).to.eql('Depth First Search: The input must be an array.');
    expect(depthFirstSearch({})).to.eql('Depth First Search: The input must be an array.');
    expect(depthFirstSearch(true)).to.eql('Depth First Search: The input must be an array.');
  });
});
