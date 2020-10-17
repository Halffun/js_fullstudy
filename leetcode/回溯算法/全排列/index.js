// 46. 全排列   https://leetcode-cn.com/problems/permutations/
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
  let res = []
  function backtrack(tmp) {
    if (tmp.length === nums.length) {
      res.push(tmp.slice(0))
    }
    for (let i = 0; i < nums.length; i++) {
      if (!tmp.includes(nums[i])) { // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
        tmp.push(nums[i])
        backtrack(tmp)
        tmp.pop()
      }
    }
  }
  backtrack([])
  return res
};
console.log(permute([1,2,3]));