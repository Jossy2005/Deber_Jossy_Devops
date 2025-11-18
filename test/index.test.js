const { sum, multiply, isEven } = require("../src/index");

describe("Math functions", () => {
  test("sum(a, b) returns the correct value", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("multiply(a, b) returns the correct value", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("isEven(n) returns true for even numbers", () => {
    expect(isEven(8)).toBe(true);
  });

  test("isEven(n) returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
  });
});
