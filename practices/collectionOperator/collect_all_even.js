'use strict';

function collect_all_even(collection) {
  return collection.filter((value,index,arr)=> (value&1)==0);
}

module.exports = collect_all_even;
