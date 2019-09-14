// 调整数组顺序使奇数位于偶数前面
// 题目：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有
// 奇数位于数组的前半部分，所有偶数位于数组的后半部分。

function reorderArray(array) {
  let start = 0
  let end = array.length - 1
  const isOdd = num => num & 1
  const swap = (a, b) => {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }

  while (start < end) {
    while (isOdd(array[start])) start++
    while (!isOdd(array[end])) end--
    if (start < end) swap(start, end)
  }

  return array
}

function test(array) {
  console.log(reorderArray(array))
}

test([1, 2, 3, 4, 5])
test([88, 3, 233, 4, 5, 10])
test([1])
test([2])
test([-19, -10, -1, -22, -101])
