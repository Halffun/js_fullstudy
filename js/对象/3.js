// 包装类
// var num = 123
// num.abc = 'aaa'

// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc);
// console.log(num*2);
// num 参与运算又变回了数字，不参与运算它还能当作对象来使
// 能有属性和方法，同理字符串和布尔也一样
// 但是 null 和 undefined 不行


// var str = 'abcd'
// console.log(str.length);

// var num = 4
// num.len = 3
// console.log(num.len);




// 包装类
var num = 4
num.len = 3
// 隐式过程
// new Number(4).len = 3
// delete len
// new Number(4).len
// console.log(num.len);




// 考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr); // [ 1, 2 ]

var str = 'abcd'
str.length = 2
// new String('abcd').length = 2  delete length   
// new String('abcd').length
// 这是一个字符串对象，天生就具备length属性
console.log(str.length); // 4


// 面试题
var str = 'abc'
str += 1
var test = typeof(str)
if (test.length == 6) {
  test.sign = 'typeOf的返回结果可能为String'
}
console.log(test.sign);