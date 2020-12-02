// 429. N 叉树的层序遍历  https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

 

// 示例 1：



// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]
// 示例 2：



// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 

// 提示：

// 树的高度不会超过 1000
// 树的节点总数在 [0, 10^4] 之间

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [root], res = [];
  if(!root) return res
  while (queue.length) {
    let row = queue.splice(0) // 当层节点取出来
    let rowValue = []
    for(let node of row) {
      rowValue.push(node.val)
      if(node.children) {
        for (let child of node.children) {          
          queue.push(child) // 下层 节点
        }
      }
    }
    res.push(rowValue)
  }
  return res
};