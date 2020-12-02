// 349. 两个数组的交集  https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 给定两个数组，编写一个函数来计算它们的交集。

 

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
 

// 说明：

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        arr.push(nums1[i])
      }
    }
  }
  return Array.from(new Set(arr)) // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
};

console.log(intersection([1,2,2,1], [2,2]));