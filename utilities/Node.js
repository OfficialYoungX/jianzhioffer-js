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

module.exports = Node
