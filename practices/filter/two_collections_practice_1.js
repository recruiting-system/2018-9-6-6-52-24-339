'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter((value,index,arr)=>collection_b.includes(value));
}

module.exports = choose_common_elements;
