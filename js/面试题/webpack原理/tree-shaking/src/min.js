export default function add(a, b) {
  return a - b
}
// 副作用
// log 请求 读写文件 ... 会对其他造成影响的 统称为副作用
console.log('side effect');