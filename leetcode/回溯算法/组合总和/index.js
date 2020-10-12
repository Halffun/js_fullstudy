// 39. 组合总和   https://leetcode-cn.com/problems/combination-sum/
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2：

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]


// 提示：

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// candidate 中的每个元素都是独一无二的。
// 1 <= target <= 500

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  function backtrack(start, tmpPath, sum) {
    if (sum >= target) {
      if (sum === target) {
      res.push(tmpPath.slice(0))
      }
    return
    }    
    for (let i = start; i < candidates.length; i++) {
      tmpPath.push(candidates[i])
      backtrack(i, tmpPath, sum + candidates[i])   
      tmpPath.pop()
    }
  }
  backtrack(0, [], 0)
  return res
};
console.log(combinationSum([2,3,6,7], 7));