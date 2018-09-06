'use strict';

function get_intersection(collection_a, collection_b) {
  // let ans=[];
  // for(let i=0;i<collection_b.length;i++){
  //   if(collection_a.includes(collection_b[i])){
  //     ans.push(collection_b[i]);
  //   }
  // }
  // return ans;
  return collection_b.filter((value,index,arr)=>collection_a.includes(value));
}

module.exports = get_intersection;
