const goodVsEvil = require("./index");

describe("Inflight Entertainment", () => {

  test("Evil wins", () => {
    expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toEqual('Battle Result: Evil eradicates all trace of Good')
  })

  test("Good wins", () => {
    expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toEqual('Battle Result: Evil eradicates all trace of Good')
  })

  test("No one wins", () => {
    expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toEqual('Battle Result: No victor on this battle field')
  })

});