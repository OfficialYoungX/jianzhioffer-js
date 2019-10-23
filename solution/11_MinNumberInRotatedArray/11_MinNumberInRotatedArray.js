// 找到旋转数组中的最小值

/**
 *
 * @param {array[number]} rotatedArray
 * @return {number} 最小元素的下标
 * 借鉴二分查找的思想
 * 核心在于如何通过中点元素推断出
 * 目标元素位于左还是右部
 *
 */
function minNumberInRotatedArray(rotatedArray) {
    if (!rotatedArray.length) return
    if (rotatedArray[0] < rotatedArray[rotatedArray.length - 1]) return 0
    function core(start, end) {
        if (start >= end) return start

        const center = Math.floor((start + end) / 2)
        if (rotatedArray[center] >= rotatedArray[0]) {
            return core(center + 1, end)
        } else {
            return core(start, center - 1)
        }
    }
    let minIndex = core(0, rotatedArray.length - 1)
    return rotatedArray[minIndex] === rotatedArray[0] ? 0 : minIndex
}

module.exports = minNumberInRotatedArray
