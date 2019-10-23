// 打印1到最大的n位数
// 题目：输入数字n，按顺序打印出从1最大的n位十进制数。比如输入3，则
// 打印出1、2、3一直到最大的3位数即999。

function print1ToMaxOfNDigits(n) {
  if (n <= 0) return
  function core(arr, n) {
    if (!n) {
      console.log(arr.join(''))
      return
    }
    for (let i = 0; i < 10; i++) {
      core([...arr, i], n - 1)
    }
  }
  core([], n)
}

// test
function test(n) {
  print1ToMaxOfNDigits(n)
}

test(1)
test(2)
test(3)
test(0)
test(-1)
