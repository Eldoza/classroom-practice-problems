const isFirstComeFirstServed = require("./index");

describe("Check Order Checker", () => {
  test("both registers have same number of orders", () => {
    expect(
      isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
    ).toEqual(true);
  });

  test("registers have different lengths", () => {
    expect(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])).toEqual(
      false
    );
  });

  test("one register is empty", () => {
    expect(isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6])).toEqual(true);
  });

  test("served orders is missing orders", () => {
    expect(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5])).toEqual(
      false
    );
  });

  test("served orders has extra orders", () => {
    expect(
      isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])
    ).toEqual(false);
  });

  test("one register has extra orders", () => {
    expect(isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8])).toEqual(false);
  });

  test("one register has unserved orders", () => {
    expect(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9])).toEqual(
      false
    );
  });

  test("order numbers are not sequential", () => {
    expect(
      isFirstComeFirstServed([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18])
    ).toEqual(true);
  });
});
