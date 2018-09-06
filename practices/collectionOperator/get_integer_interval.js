'use strict';

function get_integer_interval(number_a, number_b) {
  let ans=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      ans.push(i);
    }
  }else{
    for(let i=number_a;i>=number_b;i--){
      ans.push(i);
    }
  }
  return ans;
}

module.exports = get_integer_interval;

