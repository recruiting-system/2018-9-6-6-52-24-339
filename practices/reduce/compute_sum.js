'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function(pre,now){
    return pre+now;
  },0);
}

module.exports = calculate_elements_sum;

