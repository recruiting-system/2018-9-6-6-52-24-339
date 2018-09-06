'use strict';
var single_element = function(collection){
    let c=collection.filter((value,index,arr)=>((index+1)&1)==0);
    return c.filter((value,index,arr)=>arr.indexOf(value)==arr.lastIndexOf(value));
};
module.exports = single_element;
