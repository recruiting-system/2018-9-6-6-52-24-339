'use strict';
function one_add_next_multiply_three(collection){
  let c=collection.map(function(value,index,arr){
    if(index<collection.length-1)
      return 3*(value+collection[index+1])
    else return 0;
  })
  c.pop();
  return c;
}
module.exports = one_add_next_multiply_three;
