const { Node, LinkList } = require('../utilities/LinkList')

function findKthToTail(linkList, k) {
  if (!k) return null
  let conter = 0
  let slowP = linkList.head.next
  let fastP = linkList.head.next
  while (fastP.next) {
    conter++
    fastP = fastP.next
    if (conter >= k) {
      slowP = slowP.next
    }
  }

  return conter < k ? null : slowP.value
}

// test

function test() {
  const linkList = new LinkList()

  linkList.append(new Node(0))
  linkList.append(new Node(1))
  linkList.append(new Node(2))
  linkList.append(new Node(3))
  linkList.append(new Node(4))
  linkList.append(new Node(5))
  linkList.print()

  console.log(findKthToTail(linkList, 0)) // 无意义位置参数
  console.log(findKthToTail(linkList, 1))
  console.log(findKthToTail(linkList, 2))
  console.log(findKthToTail(linkList, 3))
  console.log(findKthToTail(linkList, 4))
  console.log(findKthToTail(linkList, 5))
  console.log(findKthToTail(linkList, 6)) // 越过链表长度
}

test()
