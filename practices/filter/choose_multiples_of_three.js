'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter((value,index,arr)=>(value%3)==0)
}

module.exports = choose_multiples_of_three;
