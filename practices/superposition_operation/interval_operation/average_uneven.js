'use strict';

function average_uneven(collection) {
  let a=collection.filter((value,index,arr)=>value>=1&&value<=10&&(value&1)==1);
  return a.reduce((pre,now,arr)=>pre+now)/a.length;
}

module.exports = average_uneven;
