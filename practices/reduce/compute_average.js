'use strict';

function compute_average(collection) {
  return collection.reduce((pre,now,arr)=>pre+now)/collection.length;
}

module.exports = compute_average;

