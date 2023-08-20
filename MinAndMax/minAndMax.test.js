const { minAndMax } = require("./index");

test("should return min: { 3: 1 } AND max: { 1: 2 }", () => {
  expect(minAndMax([1, 1, 3])).toStrictEqual({ min: { 3: 1 }, max: { 1: 2 } });
});

test("should return min: { 3: 1 } AND max: { 5: 3 }", () => {
  expect(minAndMax([1, 1, 3, 2, 4, 4, 5, 5, 5, 9, 9, 2])).toStrictEqual({
    min: { 3: 1 },
    max: { 5: 3 },
  });
});

test("should return min: { 17: 2 } AND max: { 7: 4 }", () => {
  expect(minAndMax([17, 4, 5, 5, 3, 3, 3, 4, 5, 7, 7, 7, 7, 4, 17])).toStrictEqual({
    min: { 17: 2 },
    max: { 7: 4 },
  });
});

test("should return min: { b: 1 } AND max: { a: 2 }", () => {
  expect(minAndMax(["a", "a", "b"])).toStrictEqual({ min: { b: 1 }, max: { a: 2 } });
});
