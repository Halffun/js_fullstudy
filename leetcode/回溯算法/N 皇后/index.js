// 51. N 皇后  https://leetcode-cn.com/problems/n-queens/
// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



// 上图为 8 皇后问题的一种解法。

// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

// 示例：

// 输入：4
// 输出：[
//  [".Q..",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// 解释: 4 皇后问题存在两个不同的解法。
 

// 提示：

// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = []
  function backtrack(tmpPath = []) {
    if (tmpPath.length === n) {
      // console.log(tmpPath.slice(0));
      let res = tmpPath.slice(0).map((col) => {
        return '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)
      })
      result.push(res)
    }
    // tmpPath = [1, 2, 3, 4, 5]
    for (let col = 0; col < n; col++) {
      // 不能选的位置过滤掉 同行同列对角线
      // 对角线(x, y) 是 (1, 1) tmpPath(row, col) [0] (0, 0)
      // 1 - 0 === 1 - 0 => row - x === col - y
      let flag = tmpPath.some((colIndex, rowIndex) => {
        return rowIndex - tmpPath.length === colIndex - col || 
        Math.abs(rowIndex - tmpPath.length) === Math.abs(colIndex - col) || 
        colIndex === col
      })
      // 如果在 tmpPath (已经选过的皇后的位置里面) 找到 满足上面这个公式
      // 说明这列不能选
      if(flag) continue
      tmpPath.push(col)
      backtrack(tmpPath)
      tmpPath.pop()
    }
  }
  backtrack([])
  return result
};
console.log(solveNQueens(4));