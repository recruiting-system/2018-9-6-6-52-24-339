'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((value,index,arr)=>(value&1)==1).map((value,index,arr)=>value*3+5).reduce((pre,now,arr)=>pre+now);
}

module.exports = hybrid_operation_to_uneven;

