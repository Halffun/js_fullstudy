// 对于原始类型来说，除了 null 都可以调用typeof显示正确的类型。

typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'




//但对于引用数据类型，除了函数之外，都会显示"object"。

typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'





//因此采用typeof判断对象数据类型是不合适的，采用instanceof会更好，instanceof的原理是基于原型链的查询，只要处于原型链中，判断永远为true

const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str1 = 'hello world'
str1 instanceof String // false

var str2 = new String('hello world')
str2 instanceof String // true





// instanceof能判断基本数据类型

class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}
console.log(111 instanceof PrimitiveNumber) // true
// 其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。





// 手动实现一下instanceof的功能

function myInstanceof(left, right) {
  //基本数据类型直接返回false
  if(typeof left !== 'object' || left === null) return false;
  //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while(true) {
      //查找到尽头，还没找到
      if(proto == null) return false;
      //找到相同的原型对象
      if(proto == right.prototype) return true;
      proto = Object.getPrototypeof(proto);
  }
}
console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true






// Object.is和===的区别
function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
}