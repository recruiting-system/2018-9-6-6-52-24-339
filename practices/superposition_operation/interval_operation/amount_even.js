'use strict';

function amount_even(collection) {
  return collection.filter((value,index,arr)=>value>=1&&value<=10&&(value&1)==0).reduce((pre,now,arr)=>pre+now);
}

module.exports = amount_even;
