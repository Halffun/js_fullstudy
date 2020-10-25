// 79. 单词搜索  https://leetcode-cn.com/problems/word-search/
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
 

// 提示：

// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  // console.log(m, n);
  const used = new Array(m);    // 二维矩阵used
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n);
  }
  // console.log(used);
  // 判断当前点是否是目标路径上的点
  const canFind = (row, col, i) => { // row col是当前点的坐标，i是当前考察的字符索引
    if (i > word.length - 1) {       // 递归的出口
      return true;
    }
    if (row < 0 || row >= m || col < 0 || col >= n) { // 当前点要存在
      return false;
    }
    if (used[row][col] || board[row][col] != word[i]) { // 当前的点已经走过，或当前点就不是目标点
      return false;
    }
    // 排除掉这些false情况，当前点是没问题的，可以继续递归考察
    used[row][col] = true;  // used记录一下当前点被访问了
    const canFindRest =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1); 

    if (canFindRest) { // 基于当前点，可以为剩下的字符找到路径
      return true;    
    }
    used[row][col] = false; // 找不出，返回false，继续考察别的分支，并撤销当前点的访问状态。
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) { // 找到dfs的起点
        return true; // 找到起点，且dfs的结果也true，则找到了目标路径
      }
    }
  }
  return false; // 怎么样都没有返回true，则返回false
};
console.log(exist(board =
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "ABCCED"));
const exist = (b, w) => {
  const m = b.length, n = b[0].length;
  const dfs = (r, c, i) => {
    if (i == w.length) {
      return true;
    }
    if (
      r < 0 || r >= m || c < 0 || c >= n ||
      b[r][c] !== w[i] ||
      !b[r][c]
    ) {
      return false;
    }
    const temp = b[r][c];
    b[r][c] = null;

    const canFindRest = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);

    if (canFindRest) {
      return true;
    } else {
      b[r][c] = temp;
      return false;
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (b[i][j] == w[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};