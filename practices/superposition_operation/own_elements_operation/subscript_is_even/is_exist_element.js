'use strict';
var is_exist_element = function(collection,element){
    let c=collection.filter((value,index,arr)=>(index&1)==0&&value==element);
    return c.length!=0;
};
module.exports = is_exist_element;
