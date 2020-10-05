// 去除数组的重复成员
// [...new Set(array)]

// 上面的方法也可以用于，去除字符串里面的重复字符。
[...new Set('ababbc')].join('')
// "abc"