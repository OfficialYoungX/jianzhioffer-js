const FakeQueue = require("./09_QueueWithTwoStacks")

it("appendTail works fine", () => {
    let fakeQueue = new FakeQueue()
    fakeQueue.appendTail(1)
    fakeQueue.appendTail(2)
    fakeQueue.appendTail(3)
    fakeQueue.appendTail(4)
    expect(fakeQueue.deleteHead()).toBe(1)
    expect(fakeQueue.deleteHead()).toBe(2)
    expect(fakeQueue.deleteHead()).toBe(3)
    expect(fakeQueue.deleteHead()).toBe(4)
    expect(fakeQueue.deleteHead()).toBe(null)
})

it("deleteHead works fine", () => {
    let fakeQueue = new FakeQueue()
    fakeQueue.appendTail(1)

    expect(fakeQueue.deleteHead()).toBe(1)
})
