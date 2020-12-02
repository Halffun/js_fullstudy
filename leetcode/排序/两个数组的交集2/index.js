// 350. 两个数组的交集 II  https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
// 给定两个数组，编写一个函数来计算它们的交集。

 

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
 

// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let n1 = 0, n2 = 0, arr = [];
  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] < nums2[n2]) {
      n1++
    } else if (nums1[n1] > nums2[n2]) {
      n2++
    } else {
      arr.push(nums1[n1])
      n1++
      n2++
    }
  }
  return arr
};


// 存哈希表

// const intersect = (nums1, nums2) => {
//   const map = {};
//   const res = [];
//   for (const num1 of nums1) { // 存下nums1数字的出现次数
//     if (map[num1]) {
//       map[num1]++;  
//     } else {         
//       map[num1] = 1; 
//     }
//   }
//   for (const num2 of nums2) { // 遍历nums2看看有没有数字在nums1出现过
//     const val = map[num2];
//     if (val > 0) {            // 出现过
//       res.push(num2);         // 推入res数组
//       map[num2]--;            // 匹配掉一个，就少了一个
//     }
//   }
//   return res;
// };