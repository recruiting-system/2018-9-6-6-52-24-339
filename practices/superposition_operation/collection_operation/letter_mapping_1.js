'use strict';

function func1(number,index,arr){
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

function even_to_letter(collection) {
  return collection.filter((value,index,arr)=>(value&1)==0).map(func1);
}

module.exports = even_to_letter;
