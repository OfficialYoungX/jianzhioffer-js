/* 解法一 */
function NumberOf1_Solution1(n) {
  let count = 0
  let flag = 1
  while (flag) {
    if (n & flag) count++
    flag = flag << 1
  }

  return count
}

/* 解法二 */
// 原理：
// (n - 1) & n <===> n的二进制表示中最右边的1变成0
function NumberOf1_Solution2(n) {
  let count = 0
  while (n) {
    count++
    n = (n - 1) & n
  }
  return count
}

// test

function test(num) {
  console.log(`解法1: ${NumberOf1_Solution1(num)}`)
}

test(10) // 十进制
test(0xf) // 普通十六进制
test(0x7fffffff) // 边界值
test(1) // 边界值
test(0x1) // 边界值
test(0xffffffff) // 负数边界值
test(0x80000000) // 负数边界值

function test2(num) {
  console.log(`解法2: ${NumberOf1_Solution2(num)}`)
}

test2(10) // 十进制
test2(0xf) // 普通十六进制
test2(0x7fffffff) // 边界值
test2(1) // 边界值
test2(0x1) // 边界值
test2(0xffffffff) // 负数边界值
test2(0x80000000) // 负数边界值
