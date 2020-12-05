let arr = [1,2,3,4,5]
// 0 ~ len 随机取出来
// 洗牌算法
// 抽奖
function shuffle(arr) {
  for(let i = arr.length; i >=0; i--) {
    // 0 ~ i 随机取一个索引 和 arr[i] 交换
    // [0, 1) [0, i)
    let index = Math.floor(Math.random() * (i + 1))
    [arr[i], arr[index]] = [arr[index], arr[i]]
  }
  return arr
}
console.log(shuffle(arr));