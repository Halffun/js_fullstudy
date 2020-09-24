// let a = 1;
// console.log(a);

// var  variable
// let  // 局部变量声明
// const // 声明常量

// let foo
// ({foo} = {foo: 'JSPang'}) // 这样写必须要加括号
// console.log(foo);

// let json = {
//   a:'jspang',
//   b:'技术胖'
// }
// function fun({a,c}){
//   console.log(a,c);
//   console.log(a);
//   console.log(c);
// }
// fun(json);

// let arr=['jspang','技术胖','前端教程'];
// arr.forEach((val,index)=>console.log(index,val));

// let arr=['jspang','技术胖','前端教程'];
// arr.filter(x=>console.log(x));

// let arr=['jspang','技术胖','前端教程'];
// arr.some(x=>console.log(x));

// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.map(x=>'web'));

// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.join());

// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.toString()); // 跟 arr.join() 效果相同

// 对象合并方法 assgin()
// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};
// let d=Object.assign(a,b,c)
// console.log(d);

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

// var jspang = Symbol();
// var obj={
//     [jspang]:'技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang]='web';
// console.log(obj[jspang]);

// 在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护。
// 没有进行保护的写法：
// var obj={name:'jspang',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }
// 现在我不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护。
// let obj={name:'jspang',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// for (let item in obj){
//     console.log(obj[item]);
// } 
// console.log(obj);

// let weakObj=new WeakSet(); // WeakSet() 传入值必须是对象
// let obj={a:'jspang',b:'技术胖'}
// weakObj.add(obj);
// console.log(weakObj);


// Map的灵活性要更好，你可以把它看成一种特殊的键值对，但你的key可以设置成数组，
// 值也可以设置成字符串，让它不规律对应起来。
// let json = {
//   name:'jspang',
//   skill:'web'
// }
// console.log(json.name);
// var map=new Map();
// map.set(json,'iam'); //           key                       :   value
// console.log(map); // Map { { name: 'jspang', skill: 'web' } => 'iam' }

// 在运行函数前初始化一些数据，在改变对象值后做一些善后处理。这些都算钩子函数
// var pro = new Proxy({
//   add: function (val) {
//       return val + 10;
//   },
//   name: 'I am Jspang'
// }, {
//       get:function(target,key,property){ // target：得到的目标值  key：目标的key值，相当于对象的属性  property：这个不太常用
//           console.log('come in Get');
//           return target[key];
//       },
//       set:function(target,key,value,receiver){ // target:目标值。key：目标的Key值。value：要改变的值。receiver：改变前的原始值。
//         console.log(`setting ${key} = ${value}`);
//         return target[key] = value;
//     }
//   });
//   console.log(pro.name);
//   pro.name='技术胖';
//   console.log(pro.name);

// Promise
// let state=1;

// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }


// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }


// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }

// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);

// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });



// export :负责进行模块化，也是模块的输出。
// import : 负责把模块引，也是模块的引入操作。