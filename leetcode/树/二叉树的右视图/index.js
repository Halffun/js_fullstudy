// 199. 二叉树的右视图  https://leetcode-cn.com/problems/binary-tree-right-side-view/
// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return []
  let queue = [root], res = [];
  while (queue.length) {
    // 一行
    let rowNodes = queue.splice(0)
    let row = []
    for (let node of rowNodes) {
      row.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    let s = row.splice(-1)
    res.push(s)
  }
//   res.forEach((item) => {
//       f.push(item.slice(-1))
//   }) 
  return res
};