const Node = require('../utilities/Node')

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
}

module.exports = Tree
