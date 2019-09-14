// 在O(1)时间删除链表结点
// 题目：给定单向链表的头指针和一个结点指针，定义一个函数在O(1)时间删除该
// 结点。

const { LinkList, Node } = require('../utilities/LinkList')

/**
 *
 * @param {Linklist} linkList
 * @param {Node} deletedNode
 */
function deleteNodeInList(linkList, deletedNode) {
  // 删除的是尾节点
  if (!deletedNode.next) {
    let p = linkList.head
    while (p.next.next) {
      p = p.next
    }
    p.next = null
    return
  }

  // 最正常的情况
  deletedNode.value = deletedNode.next.value
  let nextNode = deletedNode.next
  deletedNode.next = nextNode.next
}

/* test */

function test(description, fn) {
  console.log(`${description}:`)
  fn()
}

// 删除第一个节点
test('删除第一个节点', () => {
  let link = new LinkList()
  let deletedNode = new Node(100)
  link.append(deletedNode)
  link.append(new Node(1))
  link.append(new Node(2))
  link.append(new Node(3))
  link.append(new Node(4))
  link.append(new Node(5))
  link.print()
  deleteNodeInList(link, deletedNode)
  console.log('=============删除后============')
  link.print()
})

// 删除尾部节点
test('删除尾部节点', () => {
  let link = new LinkList()
  link.append(new Node(1))
  link.append(new Node(2))
  link.append(new Node(3))
  link.append(new Node(4))
  link.append(new Node(5))
  let deletedNode = new Node(100)
  link.append(deletedNode)
  link.print()
  deleteNodeInList(link, deletedNode)
  console.log('=============删除后============')
  link.print()
})

// 只有一个节点
test('链表中只有一个节点', () => {
  let link = new LinkList()
  let deletedNode = new Node(100)
  link.append(deletedNode)
  link.print()
  deleteNodeInList(link, deletedNode)
  console.log('=============删除后============')
  link.print()
})
