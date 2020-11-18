// 215. 数组中的第K个最大元素  https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function partition(arr, begin, end) {
    let pivot = arr[begin];
    while (begin < end) {
      while (begin < end && arr[end] >= pivot) end --
      arr[begin] = arr[end];
      while (begin < end && arr[begin] <= pivot) begin ++
      arr[end] = arr[begin];
      // [arr[begin], arr[end]] = [arr[end], arr[begin]];
    }
    arr[begin] = pivot;
    return begin;
  }  
  let i = partition(nums, 0, nums.length - 1)
  let target = nums.length - k
  while (i !== target) {
    if (i < target) {
      i = partition(nums, i + 1, nums.length - 1)
    } else if (i > target) {
      i = partition(nums, 0, i - 1)
    }
  }
  return nums[i]
};