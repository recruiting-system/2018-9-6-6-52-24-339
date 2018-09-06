'use strict';

function choose_no_repeat_number(collection) {
  //let ans=[];
  //for(let i=0;i<collection.length;i++){
  //  if(ans.indexOf(collection[i])==-1){
  //    ans.push(collection[i]);
  //  }
  //}
  //return ans;

  return collection.filter(function(value,index,arr){
    return collection.indexOf(value)==index;
  });
}

module.exports = choose_no_repeat_number;
