function calc(n) {
  let res = []
  function walk(num, n = 2) {
    if(num === n) {
      res.push(n)
      return
    }
    if (num % n === 0) {
      res.push(n)
      walk(num/n, n)
    } else {
      walk(num, n + 1)
    }
  }
  walk(n)
  return res
}

console.log(calc(7739));