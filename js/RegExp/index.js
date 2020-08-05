// 正则的定义
let patt1 = new RegExp("hello")
let patt2 = /world/


// 正则的使用 test()

// let pat = /my/
// let str = "this is my code..."

// let arr = str.split('')
// console.log(arr.indexOf('my'))

// console.log(pat.test(str))

// let pat = /hello/
// let msg = 'oh my world'
// console.log(pat.exec(msg))

// 正则表达式的类型
// /pattern/attributes   g   i   全局匹配，区分大小写匹配

// 不区分大小写
// let str = 'Visit NanChang oh my world'
// let pat = /nanchang/i // 不区分大小写
// let pat2 = /nanChang/gi// 区分大小写

// console.log(pat2.test(str))


// 字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/W3school/i))
// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g))


// let str = "Hello pp! oh I am wn"
// console.log(str.replace(/wn/, "snail"))

// console.log(str.split(""))
// console.log(str.split(/\s+/))


// 正则写法
// [abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g
// console.log(str.match(pat))
// [^abc] 查找任何不在方括号之间的字符
// let str = "hello pp like jinlong"
// let pat = /[^like]/g
// console.log(str.match(pat))


// let str = 'hello ziChen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat))


// let str = "That's hot!"
// let pat = /\W/g
// console.log(str.match(pat))

// let str = 'moon'
// let pat = /oon\b/g
// console.log(str.match(pat))

// let str = 'Is this his'
// let pat = /is$/g
// console.log(str.match(pat))


// 手机号正则
let tel = '17826864511'
let pat = /(^1[3-9])\d{9}$/
console.log(pat.test(tel))

let email = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/

