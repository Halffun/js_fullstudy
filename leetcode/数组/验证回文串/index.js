// 125. 验证回文串 https://leetcode-cn.com/problems/valid-palindrome/
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

// 解题思路
// 用正则将不是字母或数字的字符和空格去掉，并转小写
// 设置头尾双指针，开启循环
// 如果指向的元素不同，则返回false
// 如果相同，移动指针，相互逼近，继续循环，直至指针相遇


// var isPalindrome = function(s) {
//   let strArr = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase().split('')
//   return strArr.join('') == strArr.reverse().join('')
// };


var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
  let n = s.length;
  for (let left = 0; left < n/2; left++) {
    let right = n - 1 - left
    if (s[left] != s[right]) {
      return false
    }
  }
  return true;
};


isPalindrome("race a car")