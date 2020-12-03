function calc(n) {
  let num = n, p = 2, res = [];
  while (num !== 1) {
    if (num % p === 0) {
      res.push(p)
      num = num/p
    } else {
      p ++
    }
  }
  return res
}

console.log(calc(7739));