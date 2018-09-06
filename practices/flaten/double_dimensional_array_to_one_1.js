'use strict';

function double_to_one(collection) {
  let ans=[];
  for(let i of collection){
    if(Array.isArray(i)){
      ans=ans.concat(double_to_one(i));//array.concat方法只是返回一个合并之后的新数组，而不会改变原来的数组！！！
    }else{
      ans.push(i);
    }
  }
  return ans;
}

module.exports = double_to_one;
