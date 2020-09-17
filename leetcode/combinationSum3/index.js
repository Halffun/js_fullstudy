/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];
  let temp = [];
  let backtrack=(temp,n,start)=>{
     
     if(k===temp.length&&n==0){
         res.push(temp);
         console.log(res);
         return;
     }
     for(let i=start;i<10;i++){
         temp.push(i)
         backtrack(temp.slice(),n-i,i+1);
         temp.pop(); // pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
         }
     }
  
  backtrack(temp,n,1);
  return res;
};
console.log(combinationSum3(3, 9));
