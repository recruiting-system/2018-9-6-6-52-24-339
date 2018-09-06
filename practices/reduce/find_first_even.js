'use strict';

function find_first_even(collection) {
  return collection.find(function(value,index,arr){
    return (value&1)==0;
  })
}

module.exports = find_first_even;

