let arr = [[1, 2, 2], [3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平, 去重

function flat1(arr) {
  let res = []
  function walk(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        walk(arr[i])
      } else {
        res.push(arr[i])
      }
    }
  }
  walk(arr)
  let s = new Set(res)
  return Array.from(s)
}
console.log(flat1(arr));


function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}

flatten(arr)