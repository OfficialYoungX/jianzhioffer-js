class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = new Node(undefined)
    this.tail = this.head
  }

  append(node) {
    this.tail.next = node
    this.tail = this.tail.next
  }

  print() {
    let p = this.head.next
    let output = []
    while (p) {
      output.push(p.value)
      p = p.next
    }
    console.log(output.join('->'))
  }
}

module.exports = { Node, LinkList }
