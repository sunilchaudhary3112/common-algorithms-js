const path = require('path');
const linearSearch = require(path.join(__dirname, '..', 'algorithms', 'linearSearch.js'));
const expect = require('chai').expect;
describe('Linear Search Algorithm: linearSearch(input, value)', () => {
  it('Should return the proper index value of a found element when the value exists inside an element of the input array.', () => {
    expect(linearSearch([10, 9], 9)).to.eql(1);
    expect(linearSearch([10, 'hello'], 'hello')).to.eql(1);
    expect(linearSearch([10, true], true)).to.eql(1);
    expect(linearSearch([10, null], null)).to.eql(1);
    expect(linearSearch([10, {}], {})).to.eql(1);
    expect(linearSearch([10, undefined], undefined)).to.eql(1);
    expect(linearSearch([10, function() { var i = 'hello'; }], function() { var i = 'hello'; })).to.eql(1);
  });
  it('Should return -1 when the given value does not exist inside an element of the input array.', () => {
    expect(linearSearch([10, 9], 8)).to.eql(-1);
  });
  it('Should return an error message if the input is not an array.', () => {
    expect(linearSearch(3)).to.eql('Linear Search: The input must be an array.');
    expect(linearSearch('test')).to.eql('Linear Search: The input must be an array.');
    expect(linearSearch()).to.eql('Linear Search: The input must be an array.');
    expect(linearSearch(null)).to.eql('Linear Search: The input must be an array.');
    expect(linearSearch({})).to.eql('Linear Search: The input must be an array.');
    expect(linearSearch(true)).to.eql('Linear Search: The input must be an array.');
  });
});
