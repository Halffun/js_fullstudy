// 242. 有效的字母异位词   https://leetcode-cn.com/problems/valid-anagram/
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false
  }
  let sArr = [], tArr = [];
  for (let i in s) {
    sArr.push(s.charCodeAt(i)) // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
  }
  for (let j in t) {
    tArr.push(t.charCodeAt(j))
  }
  return sArr.sort().join('') === tArr.sort().join('') // sort() 方法用于对 数组 的元素进行排序。
};

isAnagram("anagram", "nagaram");


// var isAnagram = function(s, t) {
//   const map = new Map()
//   for (let i = 0; i < s.length; i++) {
//     const getMap = map.get(s[i])
//     if (!getMap) {
//       map.set(s[i], 1)
//     } else {
//       map.set(s[i], getMap + 1)
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     const getMap = map.get(t[i])
//     if (getMap === 1) {
//       map.delete(t[i])
//     } else if (getMap) {
//       map.set(t[i], getMap - 1)
//     } else {
//       map.set(t[i], 1)
//     }
//   }

//   if (map.size) {
//     return false
//   } else {
//     return true
//   }
// };