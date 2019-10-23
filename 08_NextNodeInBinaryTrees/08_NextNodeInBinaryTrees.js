/**
 *
 * @param {Tree} tree
 * @param {number} targetNodeValue
 */
function getNextNode(tree, targetNodeValue) {
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
    dfs(tree.root)

    return nextNodeValue
}

module.exports = getNextNode
