// Object.prototype.toString.call()
// instanceof   [] instanceof Object  // true
// Array.isArray()
// 之间的区别和优缺点


// 1. instanceof 只能判断对象类型, 但是所有的对象类型instanceof Object都是true
// 2. Object.prototype.toString.call()
// 3. Array.isArray() 在检测Array实例时, 比instanceof更优, 因为 Array.isArray()可以测出iframes