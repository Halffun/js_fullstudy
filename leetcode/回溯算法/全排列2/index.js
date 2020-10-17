// 47. 全排列 II  https://leetcode-cn.com/problems/permutations-ii/
// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

// 示例:

// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = []
  let len = nums.length
  let used = new Array(len)
  nums.sort((a, b) => a - b)
  function backtrack(tmp) {
    if (tmp.length === len) {
      res.push(tmp.slice(0))
      return
    }
    for (let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (used[i]) {
        continue
      }
      tmp.push(nums[i])
      used[i] = true
      backtrack(tmp)
      tmp.pop()
      used[i] = false
    }
  }
  backtrack([])
  return res
};
console.log(permuteUnique([1,1,2]));