let obj = {
  name: '明国',
  age: 18,
  sex: 'man',
}
obj.height = '175cm'
// console.log(obj.name)

const m = new Map()
// console.log(m) // Map {}
m.set(obj, 'content')
// console.log(m) // Map { { name: '明国', age: 18, sex: 'man' }: 'content' }

// console.log(m.get(obj)) // content

// console.log(m.has(obj)) // true
m.delete(obj)
// console.log(m.has(obj)) // false



// const map = new Map([  // { name: '祥祥', age: '20' }
//   ['name', '祥祥'],
//   ['age', '20']
// ])
// console.log(map) // Map { 'name' => '祥祥', 'age' => '20' }
// console.log(map.size) // 2
// console.log(map.has('name')) // true
// console.log(map.get('name')) // 祥祥


// const items = [
//   ['name', '祥祥'],
//   ['age', '20']
// ]
// const map = new Map()
// items.forEach(([key, value]) => {
//   // console.log(key, value) // name 祥祥    age 20
//   map.set(key, value)
// })
// items.forEach((e) => {
//   // console.log(e) // [ 'name', '祥祥' ]    [ 'age', '20' ]
//   console.log(e[0], e[1]) // name 祥祥    age 20
// })

// const set = new Set([  // Set { [ 'foo', 1 ], [ 'bar', 2 ] }
//   ['foo', 1],
//   ['bar', 2]
// ])
// // console.log(set) // Set { [ 'foo', 1 ], [ 'bar', 2 ] }
// const m1 = new Map(set)
// console.log(m1) // Map { 'foo' => 1, 'bar' => 2 }


// const map = new Map
// const k1 = ['a']
// const k2 = ['a']

// map.set(k1, 111).set(k2, 222) // k1,k2值相同，在Map中也被认为是两个键
// console.log(map) // Map { [ 'a' ] => 111, [ 'a' ] => 222 }

// map.set(0, 123) // 0, -0 默认就是一个键
// map.set(-0, 123)
// map.set(+0, 123)
// console.log(map) // Map { 0 => 123 }

// map.set(true, 1)
// map.set('true', 2)
// console.log(map.get(true)) // 1
// console.log(map.get('true')) // 2

// map.set(undefined, 3)
// map.set(null, 4)
// console.log(map) // Map { undefined => 3, null => 4 }

//NaN === NaN  // false
// map.set(NaN, 5) // NaN 默认就是一个键
// map.set(NaN, 6)
// console.log(map) // Map { NaN => 6 }
// map.clear()
// console.log(map) // Map {}

const map = new Map([
  ['foo', 'no'],
  ['bar', 'yes']
])
// keys() 返回键名的遍历器
// values() 返回键值的遍历器
// entries() 返回成员的遍历器
for (let key of map.keys()) {
  // console.log(key) // foo  bar
}
for (let key of map.values()) {
  // console.log(key) // no   yes
}
for (let key of map.entries()) {
  // console.log(key) // [ 'foo', 'no' ]   [ 'bar', 'yes' ]
}
// map.forEach((e) => {
//   console.log(e) // no  yes
// })
// console.log(map) // Map { 'foo' => 'no', 'bar' => 'yes' }
let k = [...map.keys()]
let val = [...map.values()]
let m2 = [...map] // let m2 = [...map.entries()] 相同
console.log(k) // [ 'foo', 'bar' ]
console.log(val) // [ 'no', 'yes' ]
console.log(m2) // [ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]