http 头部字段:
请求头
use-agent:

响应头
set-cookie: 后端设置 cookie

通用头:
当用在请求的时候
Content-Type: application/x-form-url-endcode | application/json
<input name="name" />
<input name="pwd" />
application/x-form-url-endcode: name=xxx&pwd=xxx
application/json: {name: xxx, pwd: xxx}
multipart/form-data:
----------分隔符----------
name=xxxx
----------分隔符----------
pwd=xxxx
----------分隔符----------

用在响应的时候
content-type: image/jpeg  image/png  text/html  text/javascript