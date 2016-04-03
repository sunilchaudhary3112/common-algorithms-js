const path = require('path');
const breadthFirstSearch = require(path.join(__dirname, '..', 'algorithms', 'breadthFirstSearch.js'));
const expect = require('chai').expect;
describe('Breadth First Search Algorithm: breadthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix.', () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]])).to.eql(true);
    expect(breadthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true);
  });
  it('Should return false when given a disconncted graph\'s adjacency matrix.', () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 0], [1, 0, 1, 0]])).to.eql(false);
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(breadthFirstSearch(3)).to.eql('Breadth First Search: The input must be an array.');
    expect(breadthFirstSearch('test')).to.eql('Breadth First Search: The input must be an array.');
    expect(breadthFirstSearch()).to.eql('Breadth First Search: The input must be an array.');
    expect(breadthFirstSearch(null)).to.eql('Breadth First Search: The input must be an array.');
    expect(breadthFirstSearch({})).to.eql('Breadth First Search: The input must be an array.');
    expect(breadthFirstSearch(true)).to.eql('Breadth First Search: The input must be an array.');
  });
});
