const { sum } = require('./mathFunctions');

// let expected = 4;
// let first = 2;
// let second = 2;

// let actual = sum(first, second);

// if (actual !== expected) {
//   console.log(`TEST FAILURE: actual value of ${actual} does not equal the expected value of ${expected}!`)
// }

// describe('sum function', () => {
//   it('adds two numbers', () => {
//     // Arrange
//     let expected = 4;
//     let first = 2;
//     let second = 2;

//     // Act
//     let actual = sum(first, second);

//     // Assert
//     expect(actual).toBe(expected);
//   });
// });

// test('it adds two numbers', () => {
//   // Arrange
//   let expected = 4;
//   let first = 2;
//   let second = 2;

//   // Act
//   let actual = sum(first, second);

//   // Assert
//   expect(actual).toBe(expected);
// });

test('it adds two numbers', ()=> {
  expect(sum(2,2)).toBe(4);
  expect(sum(5,6)).toBe(11);
  expect(sum(5,7)).not.toBe(0);
});
