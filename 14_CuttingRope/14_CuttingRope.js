// 面试题14：剪绳子
// 题目：给你一根长度为n绳子，请把绳子剪成m段（m、n都是整数，n>1并且m≥1）。
// 每段的绳子的长度记为k[0]、k[1]、……、k[m]。k[0]*k[1]*…*k[m]可能的最大乘
// 积是多少？例如当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此
// 时得到最大的乘积18。

/* 动态规划解法 */
function maxProductAfterCutting_solution1(length) {
  if (length < 2) return 0
  if (length === 2) return 1
  if (length === 3) return 2

  let products = Array.from({ length: length + 1 })

  // 计算的算子
  products[0] = 0
  products[1] = 1
  products[2] = 2
  products[3] = 3

  for (let i = 4; i <= length; i++) {
    let max = 0
    for (let j = 1; j <= Math.floor(length / 2); j++) {
      let mult = products[j] * products[i - j]
      if (mult > max) {
        max = mult
      }
    }
    products[i] = max
  }
  return products[length]
}

// test
function test(length) {
  console.log(maxProductAfterCutting_solution1(length))
}

test(0)
test(1)
test(2)
test(3)
test(8)
test(10)
