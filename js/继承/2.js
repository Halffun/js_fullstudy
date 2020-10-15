function Person() {}
var p1 = new Person()

console.log(p1.constructor); // [Funtion: Person]
Person.prototype = {
  name: 'wn'
}
var p2 = new Person()
console.log(p2.constructor); // [Funtion: Object]



// 修改了prototype后，仍想让p2.constructor指向Person
function Person() {}  // prototype  new Function()
var p1 = new Person()

// console.log(p1.constructor); // [Function: Person]
Person.prototype = {
  name: '小花',
  constructor: Person,
}
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})

var p2 = new Person()
console.log(p2.constructor); // [Function: Person]