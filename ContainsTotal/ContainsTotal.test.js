const containsTotal = require("./index.js");

test("2 + 3 equal 5", () => {
  expect(containsTotal([1, 2, 3], 5)).toBe(true);
});

test("No numbers in array equal 6, each number should only be used once.", () => {
  expect(containsTotal([1, 2, 3], 6)).toBe(false);
});

test("1 + 3 DOES NOT equal 2", () => {
  expect(containsTotal([1, 3], 2)).toBe(false);
});

test("1 + 1 should equal 2", () => {
  expect(containsTotal([1, 2, 1], 2)).toBe(true);
});

test("1 + 2 should equal 3", () => {
  expect(containsTotal([1, 2, 3], 3)).toBe(true);
});
