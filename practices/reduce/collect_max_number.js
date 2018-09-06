'use strict';

function collect_max_number(collection) {
  return collection.reduce((pre,now,arr)=>now>pre?now:pre);
}

module.exports = collect_max_number;
