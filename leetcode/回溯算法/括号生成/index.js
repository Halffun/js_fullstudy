// 22. 括号生成  https://leetcode-cn.com/problems/generate-parentheses/
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []
  function backtrack(str, right, left) {
    if (str.length === 2*n) {
      result.push(str)
      return          // 结束当前递归（结束当前搜索分支）
    }
    if (left > 0) {  // 只要左括号有剩，可以选它，继续递归做选择
      backtrack(str + '(', right, left - 1)
    }
    if (right > left) { // 右括号的保有数量大于左括号的保有数量，才能选右括号
      backtrack(str + ')', right - 1, left)
    }
  }
  backtrack('', n, n) // 递归的入口，初始字符串是空字符串，初始括号数量都是n
  return result
};
console.log(generateParenthesis(3));