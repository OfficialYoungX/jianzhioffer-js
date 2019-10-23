/**
 *
 * 面试题57（二）：为s的连续正数序列
 * 题目：输入一个正数s，打印出所有和为s的连续正数序列（至少含有两个数）。
 * 例如输入15，由于1+2+3+4+5=4+5+6=7+8=15，所以结果打印出3个连续序列1～5、
 * 4～6和7～8。
 */

/**
 *
 * @param {number} sum
 * @returns {Object}
 */
function PrintContinuousSequence(sum) {
    if (sum <= 0) return null

    let small = 1,
        large = 2,
        middle = Math.floor((1 + sum) / 2)

    while (small < middle) {
        let tempSum = getSum(small, large)
        if (tempSum === sum) {
            return {
                start: small,
                end: large
            }
        } else if (tempSum < sum) {
            large++
        } else {
            small++
        }
    }

    return null
}

function getSum(start, end) {
    if (start === end) return start
    return start + getSum(start + 1, end)
}

module.exports = PrintContinuousSequence
