const assert = require('assert');
const {
  multiply,
  divide,
  smallest,
  sort,
  noSpaces,
  emailMaker,
} = require('./index.js');

describe('Hear ye, hear ye! Come practice `yer problem solving skills here!', () => {
  describe('Tiny math functions!', () => {
    it('Multiply function should multiply inputs', () => {
      const expected = 25;
      const test = multiply(5, 5);
      assert.deepEqual(test, expected);
    });
    it('Divide function should divide inputs', () => {
      const expected = 1;
      const test = divide(5, 5);
      assert.deepEqual(test, expected);
    });
    it('Divide function should throw an error if you try to divide by 0', () => {
      assert.throws(() => {
        divide(5, 0);
      }, Error);
    });

    it('SmallestNumber-function should return smallest number from an array input', () => {
      const expected = 12;
      const test = smallest([21, 521, 12, 90]);
      assert.deepEqual(test, expected);
    });

    it('Sort function should sort the numbers in an array - from smallest to largest', () => {
      const expected = [0, 1, 2, 3, 4, 5];
      const test = sort([2, 1, 3, 5, 4, 0]);
      assert.deepEqual(test, expected);
    });
  });

  describe('String manipulation', () => {
    it('No-spaces function should remove spaces from string input', () => {
      const expected = 'hitheremynameisossian';
      const test = noSpaces('hi there my name is ossian');
      assert.deepEqual(test, expected);
    });

    it('No-spaces function should remove special characters from input', () => {
      const expected = 'hitheremynameisossian';
      const test = noSpaces('hi!there my *name* is : ossian');
      assert.deepEqual(test, expected);
    });

    it('No-spaces function should lowercase all characters', () => {
      const expected = 'hitheremynameisossian';
      const test = noSpaces('Hi!tHere my *NAME* is : ossian');
      assert.deepEqual(test, expected);
    });

    describe('emailMaker-function', () => {
      it('Should add "@gmail.com" after string input', () => {
        const expected = 'elon@gmail.com';
        const test = emailMaker('elon');
        assert.deepEqual(test, expected);
      });

      it('Should concatenate firstname and lastname with a dot in between', () => {
        const expected = 'elon.julius.musk@gmail.com';
        const test = emailMaker('elon julius musk');
        assert.deepEqual(test, expected);
      });

      it('Should throw an error if input contains special characters', () => {
        assert.throws(
          () => emailMaker('////8HD8AHD'), // when you are testing against throwing errors, the throwing function must be in the encapsulated predicate
          Error,
        );
      });
    });
  });
});
