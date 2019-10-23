const minNumberInRotatedArray = require("./11_MinNumberInRotatedArray")

it("increasing rotate array works fine", () => {
    expect(minNumberInRotatedArray([3, 4, 5, 1, 2])).toBe(3)
    expect(minNumberInRotatedArray([3, 4, 5, 8, 10, 22, 1, 2])).toBe(6)
})

it("normal increasing array works fine", () => {
    expect(minNumberInRotatedArray([3, 4, 5, 8, 10, 22])).toBe(0)
})

it("same item array works fine", () => {
    expect(minNumberInRotatedArray([3, 3, 3, 3, 3, 3])).toBe(0)
})

it("one item array works fine", () => {
    expect(minNumberInRotatedArray([3])).toBe(0)
})

it("empty array works fine", () => {
    expect(minNumberInRotatedArray([])).toBe(undefined)
})
