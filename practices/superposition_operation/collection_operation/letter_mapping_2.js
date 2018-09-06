'use strict';
function func1(number){
  let letters="abcdefghijklmnopqrstuvwxyz";
  let c="";
  let ii=number;
  while(ii!=0){
      let d=letters[(ii-1)%26];
      if(d==0){
        ii++;
    }
    c=d+c;
    ii=Math.floor((ii-1)/26);
  }
  return c;
}

function average_to_letter(collection) {
  return func1(Math.ceil(collection.reduce((pre,now,arr)=>pre+now)/collection.length));
}

module.exports = average_to_letter;

