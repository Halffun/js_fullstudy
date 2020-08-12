// String Boolean Number Undefined Null Object

// var a = 1
// var b = new Number(1)

// 原始值转布尔
// console.log(Boolean(true))
// console.log(Boolean(false))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(+0))
// console.log(Boolean(-0))
// console.log(Boolean(1))
// console.log(Boolean(-1))
// console.log(Boolean(""))
// console.log(Boolean("123"))
// console.log(Boolean(NaN))


// 原始值转数字
// new Number()
// console.log(Number())
// console.log(Number(undefined))
// console.log(Number(null))
// console.log(Number(false)) // 0
// console.log(Number(true)) // 1
// console.log(Number('123'))
// console.log(Number('-123'))
// console.log(Number('000123'))
// console.log(Number('-000123'))
// console.log(Number('0x11'))
// console.log(Number('101'))
// console.log(Number(''))

// console.log(Number('123 123'))
// console.log(Number('wn'))
// console.log(Number('100a'))
// console.log(parseInt('3 abc'))
// console.log(parseInt('3.14 abc'))
// console.log(parseFloat('3.14 abc'))
// console.log(parseInt('-12.34'))
// console.log(parseFloat('1'))


// 原始值转字符串
// var a = 'aaa'
// var b = new String('bbb')
// console.log(String()) // ''
// console.log(String(undefined)) // 
// console.log(String(null))
// console.log(String(false))
// console.log(String(true))
// console.log(String(0))
// console.log(String(-0))
// console.log(String(NaN))
// console.log(String(1))



// 原始值转对象
// 原始值通过调用 String() Number() 或者 Boolean() 构造函数，转换为他们各自的包装对象
// var a = 1
// console.log(typeof a)
// var b = new Number(a)
// console.log(typeof b)


// 对象转布尔值
// console.log(typeof Boolean(new Boolean(false)))


// 对象转字符串和数字
// toString   valueOf
var a = {
  b: 1
}
// console.log(Object.prototype.toString.call(a))
// a.toString === Object.prototype.toString.call(a)
console.log(a.toString())
console.log([].toString())
console.log([1, 2, 3].toString())
console.log([0].toString())
console.log((function(){var a = 1}).toString())
console.log(new Date().toString())

console.log(new Date().valueOf())









