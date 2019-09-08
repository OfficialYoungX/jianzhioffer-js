class Node {
  constructor(value) {
    this.l = null
    this.r = null
    this.value = value
  }

  setL(node) {
    this.l = node
  }

  setR(node) {
    this.r = node
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  createTree(data) {
    this.root = this.createTreeWrapper(data)
  }
  createTreeWrapper(data) {
    let node = new Node(data.value)
    if (data.child) {
      node.setL(this.createTreeWrapper(data.child.l))
      node.setR(this.createTreeWrapper(data.child.r))
    }
    return node
  }

  inOrder() {
    this.inOrderWrapper(this.root)
  }
  // 先序遍历
  inOrderWrapper(node) {
    if (!node) return
    this.inOrderWrapper(node.l)
    console.log(node.value)
    this.inOrderWrapper(node.r)
  }

  getDeepth() {
    return this.getDeepthWrpper(this.root)
  }
  getDeepthWrpper(node) {
    let LD, LR
    if (node === null) return 0
    console.log(node.value)
    LD = this.getDeepthWrpper(node.l)
    LR = this.getDeepthWrpper(node.r)
    return (LD > LR ? LD : LR) + 1
  }

  getNextNode(targetNodeValue) {
    let pre = null
    let nextNodeValue = null
    const dfs = node => {
      if (!node) return
      dfs(node.l)
      // 判断是否等于
      if (pre && pre.value === targetNodeValue && node)
        nextNodeValue = node.value
      pre = node
      dfs(node.r)
    }
    dfs(this.root)

    return nextNodeValue
  }
}

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

// test
let tree = new Tree()
tree.createTree(data)

console.log(`中序遍历`)
tree.inOrder()

function test(value) {
  console.log(`the ${value}'s next node is ${tree.getNextNode(value)}`)
}

test(3)
test(1)
test(4)
test(2)
test(6)
