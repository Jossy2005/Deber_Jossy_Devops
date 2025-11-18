const { sum, multiply, isEven } = require('../src/index');


test('sum adds two numbers', () => {
expect(sum(10, 5)).toBe(15);
});


test('multiply multiplies two numbers', () => {
expect(multiply(4, 3)).toBe(12);
});


test('isEven returns true for even numbers', () => {
expect(isEven(8)).toBe(true);
});


test('isEven returns false for odd numbers', () => {
expect(isEven(7)).toBe(false);
});