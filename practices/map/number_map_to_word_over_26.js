'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(fn);
};
function fn(value,index,arr){
  let letters="abcdefghijklmnopqrstuvwxyz";
  let c="";
  let ii=value;
  while(ii){
    let t=(ii-1)%26;
    if(t==0){
      ii++;
    }
    c=letters[t]+c;
    ii=Math.floor((ii-1)/26);
  }
  return c;
}

module.exports = number_map_to_word_over_26;