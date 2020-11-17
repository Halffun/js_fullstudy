module.exports = function (souce) {
  console.log(souce);
  return `
    export default 123
  `
}
// 1 js  -> document.cookie = `name=value;expire=20201117`
// console.log(document.cookie)
// 2 后端 -> 通过它返回的一个 响应头
// ctx.set('set-cookie': 'name=value')