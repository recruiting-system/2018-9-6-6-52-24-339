'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.join("")==collection_b.join("");
  //如果是不考虑元素顺序的情况，那么在这个比较之前再排序就行
}

module.exports = compare_collections;


