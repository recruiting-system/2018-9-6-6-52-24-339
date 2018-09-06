'use strict';

function split_to_zero(number, interval) {
  let ans=[number];
  let n=number;
  while(n > 0){
    n=(n-interval).toFixed(1)*1;
    ans.push(n);
  }
  return ans;
}

module.exports = split_to_zero;
