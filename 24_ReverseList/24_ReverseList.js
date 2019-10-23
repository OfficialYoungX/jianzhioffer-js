const { Node, LinkList } = require("../utilities/LinkList")

// 反转链表
// 题目：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的
// 头结点。

function reverseList(linkList) {
    if (!linkList.head.next) return

    let pre = null
    let curr = linkList.head.next
    let after = curr.next

    while (curr) {
        curr.next = pre // 反转

        // 平移指针
        pre = curr
        curr = after
        after = after && after.next
    }

    linkList.head.next = pre
}

// test

function test(fun) {
    const linkList = new LinkList()
    const nodes = []
    fun(nodes)
    nodes.forEach(node => linkList.append(node))
    linkList.print()
    reverseList(linkList)
    linkList.print()
}

test(nodes => {
    nodes.push(new Node(0))
    nodes.push(new Node(1))
    nodes.push(new Node(2))
    nodes.push(new Node(3))
    nodes.push(new Node(4))
    nodes.push(new Node(5))
})

test(nodes => {
    nodes.push(new Node(0))
    nodes.push(new Node(1))
    nodes.push(new Node(2))
})

test(nodes => {
    nodes.push(new Node(0))
    nodes.push(new Node(1))
})

test(nodes => {
    nodes.push(new Node(0))
})

test(nodes => {})
