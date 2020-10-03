// 剑指 Offer 06. 从尾到头打印链表  https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

//  

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]
//  

// 限制：

// 0 <= 链表长度 <= 10000


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let arr = []
  let s = 0
  while (head != null) {
    arr.push(head.val)
    head = head.next
  }
  for (let i = 0; i < arr.length/2; i++) {
    let j = arr.length - 1 -i
    s = arr[i]
    arr[i] = arr[j]
    arr[j] = s
  }
  return arr
};