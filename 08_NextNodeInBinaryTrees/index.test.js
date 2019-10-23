const { Tree } = require("../utilities/BinaryTree")
const getNextNode = require("./08_NextNodeInBinaryTrees")

const data = {
    value: 0,
    child: {
        l: {
            value: 1,
            child: {
                l: {
                    value: 3,
                    child: null
                },
                r: {
                    value: 4,
                    child: null
                }
            }
        },
        r: {
            value: 2,
            child: {
                l: {
                    value: 5,
                    child: null
                },
                r: {
                    value: 6,
                    child: null
                }
            }
        }
    }
}

it("general situation works fine", () => {
    let tree = new Tree()
    tree.createTree(data)

    expect(getNextNode(tree, 3)).toBe(1)
    expect(getNextNode(tree, 1)).toBe(4)
    expect(getNextNode(tree, 4)).toBe(0)
    expect(getNextNode(tree, 2)).toBe(6)
})

it("target node is tail works fine", () => {
    let tree = new Tree()
    tree.createTree(data)

    expect(getNextNode(tree, 6)).toBe(null)
})
