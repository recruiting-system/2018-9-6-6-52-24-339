'use strict';

function compute_chain_median(collection) {
  let ans;
  let a=collection.split('->').map((value,index,arr)=>value*1).sort((a,b)=>a-b);
  while(a.length>2){
    a.pop();
    a.shift();
  }
  ans=a.reduce((pre,now,arr)=>pre+now)/a.length;
  return ans;
}

module.exports = compute_chain_median;
