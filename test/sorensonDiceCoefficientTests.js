const path = require('path');
const sorensonDiceCoefficient = require(path.join(__dirname, '..', 'algorithms', 'sorensonDiceCoefficient.js'));
const expect = require('chai').expect;
describe('Sorenson-Dice Coefficient Algorithm: sorensonDiceCoefficient(input1, input2)', () => {
  it('Should return the Sorenson-Dice Coefficient between the input strings.', () => {
    expect(sorensonDiceCoefficient('test', '')).to.eql(0);
    expect(sorensonDiceCoefficient('tex', 'esr')).to.eql(0);
    expect(sorensonDiceCoefficient('texts', 'text')).to.eql(0.8571428571428571);
    expect(sorensonDiceCoefficient('text', 'text')).to.eql(1);
    expect(sorensonDiceCoefficient('text', 'rext')).to.eql(0.6666666666666666);
  });
  it('Should return an error message if either the input is not a string.', () => {
    expect(sorensonDiceCoefficient(3, 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
    expect(sorensonDiceCoefficient(['test'], 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
    expect(sorensonDiceCoefficient(undefined, 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
    expect(sorensonDiceCoefficient(null, 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
    expect(sorensonDiceCoefficient({}, 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
    expect(sorensonDiceCoefficient(true, 'st')).to.eql('Sorenson-Dice Coefficient: The input arguments must be strings.');
  });
});
