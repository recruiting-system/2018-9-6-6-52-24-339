'use strict';
function rank_by_two_large_one_small(collection){
  let ans=[];
  let c=collection.sort(function(a,b){
    return a-b;
  });
  for(let i=0;i<c.length;i+=3){
    let cc=c.slice(i,i+3);
    if(cc.length==3)
      cc.push(cc.shift());
    ans=ans.concat(cc);
  }
  return ans;
}
module.exports = rank_by_two_large_one_small;
