const http = require('http')
const qs = require('querystring')
// api?callback=xx&a=1&b=2
http.createServer((req, res) => {
  // console.log(req);
  if (req.url.includes('/api')) {
    let json = {
      code: 0
    }
    // callback=xx&a=1&b=2
    console.log(qs.parse(req.url.split('?')[1]));
    // {callback: 'xxx', a: 1, b: 2}
    // qs.stringify
    let fn = qs.parse(req.url.split('?')[1]).callback
    res.end(`${fn}(${JSON.stringify(json)})`)
    // res.end(json)
  } else {
    res.end('')
  }
})
.listen(8088, () => {
  console.log(8088);
})