const Tree = require('../utilities/BinaryTree')

/**
 *
 * @param {Tree} tree
 * @param {number} targetNodeValue
 */
function getNextNode(tree, targetNodeValue) {
  let pre = null
  let nextNodeValue = null
  const dfs = node => {
    if (!node) return
    dfs(node.l)
    // 判断是否等于
    if (pre && pre.value === targetNodeValue && node) nextNodeValue = node.value
    pre = node
    dfs(node.r)
  }
  dfs(tree.root)

  return nextNodeValue
}

// test

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

let tree = new Tree()
tree.createTree(data)

function test(value) {
  console.log(`the ${value}'s next node is ${getNextNode(tree, value)}`)
}

test(3)
test(1)
test(4)
test(2)
test(6)
