# JS事件流 (面试题：事件的触发过程是怎样的？)
1. window 往事件触发处传播，遇到注册的捕获事件会触发
2. 传播到事件触发处时触发注册事件
3. 从事件触发处往window 传播，遇到注册的冒泡事件会触发
https://blog.csdn.net/sunrunning/article/details/80199842



# 什么是事件代理？event.html