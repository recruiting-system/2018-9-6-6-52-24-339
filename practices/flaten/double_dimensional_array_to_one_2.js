'use strict';

function double_to_one(collection) {
  let ans=[];
  for(let i of collection){
    if(Array.isArray(i)){
      ans=ans.concat(double_to_one(i));
    }else{
      ans.push(i);
    }
  }
  return ans.filter((value,index,arr)=>(arr.indexOf(value))==index);
}

module.exports = double_to_one;
