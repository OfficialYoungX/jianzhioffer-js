const FakeStack = require("./09_StackWithTwoQueue")

it("appendTail works fine", () => {
    let fakeStack = new FakeStack()
    fakeStack.appendTail(1)
    fakeStack.appendTail(2)
    fakeStack.appendTail(3)
    fakeStack.appendTail(4)

    expect(fakeStack.popTail()).toBe(4)
    expect(fakeStack.popTail()).toBe(3)
    expect(fakeStack.popTail()).toBe(2)
    expect(fakeStack.popTail()).toBe(1)
    expect(fakeStack.popTail()).toBe(undefined)
})

it("popTail works fine", () => {
    let fakeStack = new FakeStack()
    fakeStack.appendTail(1)

    expect(fakeStack.popTail()).toBe(1)
})
