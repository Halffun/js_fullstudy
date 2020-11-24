var data = {
  name: 'wn',
  age: 18
}

function observe(obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  }) 
}

function defineReactive(obj, key, val) {
  if (typeof val === 'object' && val !== null) {
    observe(val)
  }
  Object.defineProperty(obj, key ,{
    set: (newval) => {
      val = newval
    },
    get: () => {
      return val
    },
  })
}

observe(data)
let name = data.name // get value
data.name = 'jl'     // set value

console.log(data.name);