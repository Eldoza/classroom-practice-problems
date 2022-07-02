const canTwoMoviesFillFlight = require("./index");

describe("Inflight Entertainment", () => {
  test("short flight", () => {
    expect(canTwoMoviesFillFlight([2, 4], 1)).toEqual(false);
  });

  test("long flight", () => {
    expect(canTwoMoviesFillFlight([2, 4], 6)).toEqual(true);
  });

  test("one movie half flight length", () => {
    expect(canTwoMoviesFillFlight([3, 8], 6)).toEqual(false);
  });

  test("two movies half flight length", () => {
    expect(canTwoMoviesFillFlight([3, 8, 3], 6)).toEqual(true);
  });

  test("lots of possible pairs", () => {
    expect(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7)).toEqual(true);
  });

  test("not using first movie", () => {
    expect(canTwoMoviesFillFlight([4, 3, 2], 5)).toEqual(true);
  });

  test("only one movie", () => {
    expect(canTwoMoviesFillFlight([6], 6)).toEqual(false);
  });

  test("only one movie", () => {
    expect(canTwoMoviesFillFlight([], 2)).toEqual(false);
  });
});