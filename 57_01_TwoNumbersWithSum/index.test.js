const FindNumbersWithSum = require("./57_01_TwoNumbersWithSum")

it("general situation works fine", () => {
    expect(FindNumbersWithSum([1, 2, 4, 7, 11, 15], 15)).toBe(true)
})

it("first + last situation works fine", () => {
    expect(FindNumbersWithSum([1, 2, 4, 7, 11, 16], 17)).toBe(true)
})

it("don't exists solution works fine", () => {
    expect(FindNumbersWithSum([1, 2, 4, 7, 11, 16], 10)).toBe(false)
})

it("boundary situation works fine", () => {
    expect(FindNumbersWithSum([10], 10)).toBe(false)
    expect(FindNumbersWithSum([], 10)).toBe(false)
})
