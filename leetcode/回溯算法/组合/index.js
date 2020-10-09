// 77. 组合  https://leetcode-cn.com/problems/combinations/
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  let nums = new Array(n).fill(null).map((num, i) => i + 1)
  function backtrack(start, tmpPath) {
    if (tmpPath.length === k) {
      result.push(tmpPath.slice(0))
      return
    }
    for (let i = start; i < nums.length; i++) {
      let num = nums[i]
      tmpPath.push(num)
      backtrack(i + 1, tmpPath)
      tmpPath.pop()
    }
  }
  backtrack(0, [])
  return result
};

console.log(combine(4, 2));