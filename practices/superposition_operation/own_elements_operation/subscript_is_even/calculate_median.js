'use strict';
var calculate_median = function(collection){
    let a=collection.filter((value,index,arr)=>(index+1&1)==0);
    while(a.length>2){
        a.pop();
        a.shift();
    }
    return a.reduce((pre,now,arr)=>pre+now)/a.length;
};
module.exports = calculate_median;
