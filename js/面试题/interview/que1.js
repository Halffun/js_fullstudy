// ['1', '2', '3'].map(parseInt)

['1', '2', '3'].map((item, index) => {
  return parseInt(item, index)
})

// ['10', '10', '10', '10'].map(parseInt)

// parseInt(100, 10) // 基数

// parseInt(string[, radix])

// parseInt(' a') // 10

// 站在radix进制的基础上来看第一个参数, 把它转化成10进制

