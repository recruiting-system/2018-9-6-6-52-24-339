'use strict';

function grouping_count(collection) {
  // let map={};
  // for(let i=0;i<collection.length;i++){
  //   if(typeof(map[collection[i]])=="undefined"){
  //     map[collection[i]]=1;
  //   }else{
  //     map[collection[i]]++;
  //   }
  // }
  // return map;

  return collection.reduce((pre,now,index,arr)=>{
    if(!pre[now]){
      pre[now]=1;
    }else{
      pre[now]++;
    }
    console.log(pre);
    return pre;
  },{})
  // let map = new Map();
  // collection.forEach((value,index,arr)=>{
  //   if(map.has(value)){
  //     map.set(value,map.get(value)+1);
  //   }else{
  //     map.set(value,1);
  //   }
  // });
  // let result ={};
  // for(let [key,value] of map.entries()){
  //   result[key]=value;
  // }
  // return result;
}

module.exports = grouping_count;
