'use strict';
function get_integer_interval_2(number_a, number_b) {
  let ans=[];
  if(number_a<=number_b){
    for(let i=(number_a&1)==0?number_a:number_a+1;i<=number_b;i+=2){
      ans.push(i);
    }
    return ans;
  }else{
    return get_integer_interval_2(number_b,number_a).reverse();
  }
}

module.exports = get_integer_interval_2;
