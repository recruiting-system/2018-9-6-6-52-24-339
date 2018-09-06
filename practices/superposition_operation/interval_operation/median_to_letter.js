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

function median_to_letter(collection) {
  let a=collection.concat();
  while(a.length>2){
    a.pop();
    a.shift();
  }
  return func1(Math.ceil(a.reduce((pre,now,arr)=>pre+now)/a.length));
}

module.exports = median_to_letter;
