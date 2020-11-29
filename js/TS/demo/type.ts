// Boolean 类型
let isDone: boolean = false
// isDone = 123

let count: number = 10

let nickname: string = 'jinlong'

// symbol
let people: symbol = Symbol('pipi')

const sym = Symbol()
let obj = {
  [sym]: 'jinlong'
}
console.log(obj[sym]);

// array
// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]


// Enum
// 数字枚举

// enum Direction {
//   EAST,
//   SOUTH,
//   WEST,
//   NORTH
// }
// let dir: Direction = Direction.NORTH // 3
// let dirVal = Direction[0]
// console.log(dirVal);


// 字符串枚举
// enum Direction {
//   EAST = 'EAST',
//   SOUTH = 'SOUTH',
//   WEST = 'WEST',
//   NORTH = 'NORTH'
// }


// 异构枚举
enum Enum {
  A,
  B,
  C = 'c',
  D = 'd',
  E = 8,
}



// any
let notSure: any = 666
notSure = 'hello'

let test: number = notSure


// unknown
let value: unknown;
value = true
value = 123
value = 'hello' 

let value1: unknown = value
let value2: any = value 
// let value3: boolean = value // 报错
// let value4: number = value // 报错
// let value5: string = value // 报错


// tuple 类型 元组
let tupleType: [string, boolean]
tupleType = ['yuanlong', false] // 只能放两个元素且必须严格按照上述类型放置


// void 类型
function User():void {
  console.log('hello world');
  
}

// null  undefined
let u: undefined = undefined
let n: null = null

let num: number = undefined