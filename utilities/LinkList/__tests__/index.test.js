const { LinkList, Node } = require('./../LinkList')

let link = new LinkList()
link.append(new Node(1))
link.append(new Node(2))
link.append(new Node(3))
link.append(new Node(4))
link.append(new Node(5))

link.print()
