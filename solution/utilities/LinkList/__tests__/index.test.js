const { LinkList, Node } = require("./../LinkList")

it("append & print works fine", () => {
    const spy = jest.spyOn(console, "log")

    let link = new LinkList()
    link.append(new Node(1))
    link.append(new Node(2))
    link.append(new Node(3))
    link.append(new Node(4))
    link.append(new Node(5))
    link.print()

    expect(spy).toHaveBeenCalledWith("1->2->3->4->5")

    spy.mockRestore()
})

it("print works fine", () => {
    const spy = jest.spyOn(console, "log")

    let link = new LinkList()
    link.print()

    expect(spy).toHaveBeenCalledWith("")

    spy.mockRestore()
})
