```js
ctx.set('expires',)
ctx.body = ''
```

1.0 expires: 2020-10-30 12:00:00
1.1 cache-control: max-age=24*2*60*60
强缓存
## cache-control

协商缓存

响应: etag  请求: if-none-match
响应: last-modified  请求: if-modified-since


```js
ctx.set('etag', )
```