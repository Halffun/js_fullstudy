// 对象数组的去重
const responseList = [
  {id: 1, a: 1},
  {id: 2, a: 2},
  {id: 3, a: 3},
  {id: 1, a: 4},
]

// arr.reduce(callback,[initialValue])
// callback （执行数组中每个值的函数，包含四个参数）

//     1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
//     2、currentValue （数组中当前被处理的元素）
//     3、index （当前元素在数组中的索引）
//     4、array （调用 reduce 的数组）

// initialValue （作为第一次调用 callback 的第一个参数。）

const result = responseList.reduce((acc, cur) => {
  const ids = acc.map(item => item.id)
  console.log(acc);
  return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])


// function quchong(obj) {
//   let res = [], test = [];
//   obj.forEach((v) => {
//     if(!test.includes(v['id'])){
//       res.push(v)
//       test.push(v['id'])
//     }
//   })
//   console.log(res);
// }
// quchong(responseList)