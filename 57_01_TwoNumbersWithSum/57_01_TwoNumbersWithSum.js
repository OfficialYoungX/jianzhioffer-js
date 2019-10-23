// 面试题57（一）：和为s的两个数字
// 题目：输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们
// 的和正好是s。如果有多对数字的和等于s，输出任意一对即可。

/**
 *
 * @param {Array<number>} data
 * @param {number} sum
 * @returns {boolean}
 */
function FindNumbersWithSum(data, sum) {
  if (!data || !data.length || data.length === 1) return false;

  let small = 0,
    large = data.length - 1;
  while (small < large) {
    let tempSum = data[small] + data[large];
    if (tempSum === sum) return true;
    if (tempSum < sum) small++;
    else large--;
  }
  return false;
}

// test
function test(data, sum) {
  console.log(FindNumbersWithSum(data, sum));
}

test([1, 2, 4, 7, 11, 15], 15);
test([1, 2, 4, 7, 11, 16], 17);
test([1, 2, 4, 7, 11, 16], 10);
test([10], 10);
test([], 10);

module.exports = FindNumbersWithSum;
