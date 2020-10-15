// 17. 电话号码的字母组合  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let result = []
  if (!digits.length) { // 如果为空就直接返回
    return result
  }
  let obj = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u' ,'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  function backtrack(start, str) {
    if (start === digits.length) { // 如果达到规定长度，压入数组后退出
      result.push(str)
      return
    }
    for (let i = 0; i < obj[digits[start]].length; i++) {
      let tmp = str  // 记录初始状态
      str += obj[digits[start]][i]
      backtrack(start + 1, str)
      str = tmp // 恢复初始状态
    }
  }
  backtrack(0, '')
  return result
};
console.log(letterCombinations(''));
