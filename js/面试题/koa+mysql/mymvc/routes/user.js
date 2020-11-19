module.exports = {
  'get /': async (app) => {
    const name = await app.$service.user.getName()
    app.ctx.body = '用户' + name
  },
  'get /detail': async (app) => {
    const age = await app.$service.user.getAge()
    app.ctx.body = '用户年龄' + age
  },
}