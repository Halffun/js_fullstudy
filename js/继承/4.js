function SuperType() {
  this.colors = ['red', 'green', 'blue']
  this.fn = function() {
    // xxxx
  }
}
SuperType.prototype.getName = function() {}

function SubType() {
  SuperType.call(this)
}

let instance1 = new SubType()
instance1.colors.push('pink')
console.log(instance1.colors); // ['red', 'green', 'blue', 'pink']

let instance2 = new SubType()
console.log(instance2.colors);