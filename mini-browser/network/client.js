// const http = require('http')
// TCP
// 进程间通信的方式：net
const net = require('net')
// XmlHttprequest
const client = net.createConnection({
  port: 8088
}, () => {
  let jsonStr = JSON.stringify({a: 1, b: 2})
  client.write('GET / HTTP/1.1\r\n')
  client.write('HOST: 127.0.0.1\r\n')
  client.write('Content-Type: application/json\r\n')
  client.write('\r\n')
  client.write(jsonStr)
  client.end()
})
client.on('data', (data) => {
  console.log('收到', data.toString());
})
// HTTP/1.1 200 OK
// X-Foo: bar
// Content-Type: text/plain
// Date: Mon, 05 Oct 2020 02:32:19 GMT
// Connection: keep-alive
// Transfer-Encoding: chunked

// 2
// ok
// 0
// 解析

// <p><span>123</span></p>
// 2 html ->(有限状态机) DOM 树
// 一个字符串里面 有没有 ab