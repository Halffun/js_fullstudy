function newFunc(Fn) {
  let o = {}
  o.__proto__ = Fn.prototype
  Fn.call(o, arguments)
  return o
}

// new Fn() ---> {}
// newFunc(Fn)