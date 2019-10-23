const PrintContinuousSequence = require("./57_02_ContinuousSquenceWithSum")

it("sum <= 0 works fine", () => {
    expect(PrintContinuousSequence(-1)).toStrictEqual(null)
    expect(PrintContinuousSequence(0)).toStrictEqual(null)
})

it("general situation works fine", () => {
    expect(PrintContinuousSequence(3)).toStrictEqual({ start: 1, end: 2 })
    expect(PrintContinuousSequence(9)).toStrictEqual({ start: 2, end: 4 })
    expect(PrintContinuousSequence(100)).toStrictEqual({ start: 9, end: 16 })
})

it("don't exist solution situation works fine", () => {
    expect(PrintContinuousSequence(1)).toStrictEqual(null)
    expect(PrintContinuousSequence(4)).toStrictEqual(null)
})
