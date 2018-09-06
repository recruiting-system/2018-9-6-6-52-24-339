'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  // let ans=[];
  // for(let i=0;i<collection_a.length;i++){
  //   for(let j=0;j<collection_b.length;j++){
  //     if(collection_a[i]%collection_b[j]==0){
  //       ans.push(collection_a[i]);
  //       break;
  //     }
  //   }
  // }
  // return ans;

  return collection_a.filter((value,index,arr)=>{
    return collection_b.some((bvalue,bindex,barr)=>{
      return value%bvalue===0;
    });
  });
}

module.exports = choose_divisible_integer;
