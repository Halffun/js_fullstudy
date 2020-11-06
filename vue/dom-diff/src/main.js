import { createElement, render, renderDom } from './element'
import diff from './diff'
import patch from './patch'


let vertualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['2'])
])

let vertualDom2 = createElement('ul', {class: 'list-group', id: 'group'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['2']),
  createElement('li', {class: 'item'}, ['3']),
])


let el = render(vertualDom1)
renderDom(el, document.getElementById('app')) // window.app

let patches = diff(vertualDom1, vertualDom2) // 补丁
// 给元素打补丁 更新视图
patch(el, patches)
console.log(el);
console.log(vertualDom1);
console.log(patches);

// vertualDom1 = <ul class="list">
//                 <li class="item">1</li>  
//                 <li class="item">2</li>  
//               </ul>


// DOM diff 比较两个虚拟DOM的区别, 比较两个对象的区别
// 根据两个虚拟对象创建出来 补丁, 描述改变的内容, 将这个补丁用来更新DOM