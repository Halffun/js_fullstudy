## SPA

单页应用
所有内容都写一个  index.js
npm run build

用户访问 index.html(<div id="root"></div>)
-> script -> 发起请求 -> js 执行，构造出页面出来了

## SSR(同构)

vue react:
虚拟DOM：
平台无关
mount('#app') 当渲染在浏览器里面 虚拟DOM 变成 真实 DOM
当渲染在服务器里面  虚拟DOM 变成 字符串
当渲染在客户端 (IOS) 里面  虚拟DOM 变成 客户端的组件

<template>
  <div>123</div>
</template>

import XXX from 'XXX.vue'

let html = `<div>123</div>`
res.end(html)