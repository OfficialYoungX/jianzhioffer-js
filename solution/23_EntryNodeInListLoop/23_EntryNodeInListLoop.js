const { Node, LinkList } = require('../utilities/LinkList')

// 链表中环的入口结点
// 题目：一个链表中包含环，如何找出环的入口结点？例如，在图3.8的链表中，
// 环的入口结点是结点3。

function entryNodeInListLoop(linkList) {
  // 判断是否有环
  if (!hasLoop(linkList)) return null

  // 得到环的长度
  const loopLen = getLoopLength(linkList)

  // 得到入口节点
  let slowP = linkList.head.next
  let fastP = linkList.head.next
  let n = loopLen
  while (n--) {
    fastP = fastP.next
  }

  while (fastP !== slowP) {
    slowP = slowP.next
    fastP = fastP.next
  }

  return slowP
}

function run(linkList) {
  let slowP = linkList.head
  let fastP = linkList.head
  while (fastP) {
    slowP = slowP.next
    fastP = fastP.next
    fastP = fastP.next
    if (slowP === fastP) {
      return fastP
    }
  }
  return null
}

function hasLoop(linkList) {
  return !!run(linkList)
}

function getLoopLength(linkList) {
  let loopLen = 0
  let startNode = run(linkList)
  let p = startNode.next
  while (p !== startNode) {
    loopLen++
    p = p.next
  }
  loopLen++

  return loopLen
}

// test

function test_1() {
  const linkList = new LinkList()
  const nodes = []
  nodes.push(new Node(0))
  nodes.push(new Node(1))
  nodes.push(new Node(2))
  nodes.push(new Node(3))
  nodes.push(new Node(4))
  nodes.push(new Node(5))
  nodes.forEach(node => linkList.append(node))
  nodes[nodes.length - 1].next = nodes[2]
  //        __________
  //       |         |
  // 0->1->2->3->4->5
  console.log(entryNodeInListLoop(linkList))
}
test_1()

function test_2() {
  const linkList = new LinkList()
  const nodes = []
  nodes.push(new Node(0))
  nodes.push(new Node(1))
  nodes.push(new Node(2))
  nodes.push(new Node(3))
  nodes.push(new Node(4))
  nodes.push(new Node(5))
  nodes.forEach(node => linkList.append(node))
  nodes[nodes.length - 1].next = nodes[0]
  //  ________________
  // |               |
  // 0->1->2->3->4->5
  console.log(entryNodeInListLoop(linkList))
}
test_2()

function test_3() {
  const linkList = new LinkList()
  const nodes = []
  nodes.push(new Node(0))
  nodes.forEach(node => linkList.append(node))
  nodes[nodes.length - 1].next = nodes[0]
  //  __
  // | |
  // 0->
  console.log(entryNodeInListLoop(linkList))
}
test_3()

function test_4() {
  const linkList = new LinkList()
  const nodes = []
  nodes.push(new Node(0))
  nodes.forEach(node => linkList.append(node))
  // 0->1->2->3->4->5
  nodes.push(new Node(0))
  nodes.push(new Node(1))
  nodes.push(new Node(2))
  nodes.push(new Node(3))
  nodes.push(new Node(4))
  nodes.push(new Node(5))
  console.log(entryNodeInListLoop(linkList))
}
test_4()
