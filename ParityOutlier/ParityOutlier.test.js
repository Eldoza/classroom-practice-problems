const findOutlier = require("./index");

describe("Inflight Entertainment", () => {

  test("Das even", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toEqual(11)
  })

  test("Das odd", () => {
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toEqual(11)
  })

  test("Das even better", () => {
    expect(findOutlier([10, 12, 88, 1000, 40, 27, 2602, 88, 66, 42])).toEqual(27)
  })

});