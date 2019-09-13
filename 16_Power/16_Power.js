/**
 *
 * @param {number} base 底数
 * @param {*number} exponent 指数
 */
function power(base, exponent) {
  if (equil(base, 0)) {
    return 0
  }

  if (equil(exponent, 0)) {
    return 1
  }

  let unsigned = quickPowerUnsigned(base, Math.abs(exponent))

  if (exponent < 0) {
    return 1 / unsigned
  }

  return unsigned
}

function equil(a, b) {
  return Math.abs(a - b) < 0.00001
}

/* 快速乘方 */
// 递归实现
function quickPowerUnsigned(base, exponent) {
  if (exponent === 1) return base

  let result = quickPowerUnsigned(base, Math.floor(exponent / 2))
  result *= result

  if (exponent & 1) return result * base
  return result
}

// 非递归实现
function quickPowerUnsignedNonRecursive(x, n) {
  let result = 1
  while (n) {
    if (n & 1) result *= x // 对应的二进制位为 1
    n = n >> 1 // n = n / 2
    x *= x
  }
  return result
}

console.log(quickPowerUnsigned(2, 5))

function test(base, exponent) {
  console.log(power(base, exponent))
}

test(0, 100)
test(1, 100)
test(10, 3)
test(-1, 3)
test(0, -100)
test(5, -2)
test(-5, -2)
test(-5, -3)
