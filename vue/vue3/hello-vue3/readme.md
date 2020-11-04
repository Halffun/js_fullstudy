# vue3.0 与 vue2.0 的区别

1. template里面不再需要唯一的根节点, 减少了没意义的dom
2. 使用Composition API  (2.0使用的是options API)
3. 完美支持treeshaking


组件: 
fragment: 不再需要一个无用的根节点
teleport: 可以指明dom节点插入
suspense: 更好的实现异步组件