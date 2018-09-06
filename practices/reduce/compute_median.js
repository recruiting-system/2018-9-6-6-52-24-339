'use strict';

function compute_median(collection) {
  let ans=collection.sort((a,b)=>a-b);
  while(ans.length>2){
    ans.pop();
    ans.shift();
  }
  return ans.reduce((pre,now,arr)=>pre+now)/ans.length;
}

module.exports = compute_median;


