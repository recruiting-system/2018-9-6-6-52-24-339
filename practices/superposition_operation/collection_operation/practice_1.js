'use strict';

function hybrid_operation(collection) {
  return collection.map((value,index,arr)=>value*3+2).reduce((pre,now,arr)=>pre+now);
}

module.exports = hybrid_operation;

