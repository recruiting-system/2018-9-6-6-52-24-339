'use strict';

function get_union(collection_a, collection_b) {
  // let ans=[];
  // for(let i=0;i<collection_a.length;i++){
  //   ans.push(collection_a[i]);
  // }
  // for(let i=0;i<collection_b.length;i++){
  //   if(collection_a.indexOf(collection_b[i])==-1){
  //     ans.push(collection_b[i]);
  //   }
  // }
  // return ans;

  let temp = collection_a.concat(collection_b);
  return Array.from(new Set(temp));
}

module.exports = get_union;

