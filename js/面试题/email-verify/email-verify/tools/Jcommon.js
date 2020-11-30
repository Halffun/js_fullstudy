exports.check_key_words = function (key_names, ctx, request_methods) {
  for (let i = 0; i < key_names.length; i++) {
    let key = key_names[i];
    let key_name;
    if (request_methods == 'GET') {
      key_name = ctx.request.query[key]
    } else {
      key_name = ctx.request.body[key]
    }

    if (typeof key_name == 'undefined' || key_name == '' || !key_name) {
      ctx.body = {
        status: ctx.request.statusCode,
        data: {},
        error: {
          code: '30001',
          info: key_names[i] + '字段没有提供'
        }
      }
      return false
    }
  }
  return true
}