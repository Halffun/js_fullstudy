// 介绍 重绘 和 回流, 以及如何优化

// 重绘: 当页面中元素样式的改变并不影响它在文档流中的位置时, 浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

// 回流: 布局或者几何属性改变

// 回流必将引起重绘，重绘不一定会引起回流。



/* 
优化: 
1. 避免使用 clientWidth...  offsetWidth...  getBoundingClientRect, 因为会强制刷新浏览器的任务队列

2. 使用 transform 代替 top 
   使用 visibility 代替 display: none
   避免使用 table 布局
   避免设置多层内连样式

3. 避免频繁操作样式
   避免频繁操作DOM
   对具有复杂动画的元素使用绝对定位
*/