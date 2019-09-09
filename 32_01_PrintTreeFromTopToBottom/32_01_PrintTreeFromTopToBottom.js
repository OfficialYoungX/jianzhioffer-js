const BinaryTree = require('../utilities/BinaryTree')

/**
 *
 * @param {BinaryTree} tree
 */
function levelReverse(tree) {
  if (!tree.root) return
  const queue = []
  queue.push(tree.root)

  while (queue.length) {
    const head = queue.shift()
    console.log(head.value)
    if (head.l) queue.push(head.l)
    if (head.r) queue.push(head.r)
  }
}

/**
 * test
 */

//             0
//           /   \
//          1     2
//         /\     /\
//        3  4   5  6
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

const tree = new BinaryTree()
tree.createTree(data)
levelReverse(tree)
