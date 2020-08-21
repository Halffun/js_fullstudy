var num = 123
num.toString() // '123'   ----> new Number(num).toString()

// console.log(num.toString());

// Number.prototype.__proto__ = Object.prototype



// 方法重写
Object.prototype.toString = function () {
  return 'hahahaha'
}


function Person() {
  
}
var person = new Person()
console.log(person.toString()); // hahahaha