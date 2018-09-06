'use strict';
var even_asc_odd_desc = function(collection){
    let c1=collection.filter(function (value,index,arr){
        return value%2==0;
    });//偶数数组
    let c2=collection.filter(function (value,index,arr){
        return value%2==1;
    });//奇数数组
    c1.sort(function(a,b){
        return a-b;
    });
    c2.sort(function(a,b){
        return b-a;
    })
    return c1.concat(c2);
};
module.exports = even_asc_odd_desc;
