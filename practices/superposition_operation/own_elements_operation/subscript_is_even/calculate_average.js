'use strict';
var calculate_average = function(collection){
    let a=collection.filter((value,index,arr)=>((index+1)&1)==0);
    return a.reduce((pre,now,arr)=>pre+now)/a.length;
};
module.exports = calculate_average;
