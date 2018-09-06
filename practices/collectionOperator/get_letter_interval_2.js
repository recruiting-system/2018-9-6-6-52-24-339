'use strict';

function get_letter_interval_2(number_a, number_b) {
  let ans = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      ans.push(number2Letter(i));
    }
    return ans;
  } else {
    return get_letter_interval_2(number_b, number_a).reverse();
  }
}

function number2Letter(number) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  while (number) {
    result = letters.charAt((number - 1) % 26) + result;
    number = parseInt((number - 1) / 26);
  }
  return result;
}

module.exports = get_letter_interval_2;

