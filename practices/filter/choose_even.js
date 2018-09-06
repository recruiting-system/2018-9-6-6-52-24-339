'use strict';

function choose_even(collection) {
  return collection.filter((value,index,arr)=>(value&1)==0)
}

module.exports = choose_even;
